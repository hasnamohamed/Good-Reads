import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { populatedBook } from 'src/app/db-models/books-populated';
import { categoryInfo } from 'src/app/db-models/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { IAuthor } from 'src/Models/iauthor';
import { IBook } from 'src/Models/ibook';
import { AuthorServiceService } from 'src/Services/author-service.service';
import { BookService } from 'src/Services/books.service';
import { AdminAuthorsComponent } from '../admin-authors/admin-authors.component';
import { AdminCategoriesComponent } from '../admin-categories/admin-categories.component';

@Component({
  selector: 'admin-authors',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent {

  @ViewChild('bookImage') bookImage!:ElementRef;
  @ViewChild('closeButton') closeButton!:ElementRef;


  adminActions:string = ""

  bookID:string = ""
  bookInfo:IBook =
  {
    title:"",
    description:"",
    authorId:"",
    cateId:"",
    image:"",
  }

  booksList:populatedBook[] = []
  cateList:categoryInfo[] = []
  authorsList:IAuthor[] = []

  totalPageNumber:number = 1;
  currentPageNumber:number = 1;

  constructor(
    private booksService:BookService,
    private authorServices:AuthorServiceService,
    private categoryService:CategoriesService
    )
  {

  }



  ngOnInit() {
    this.getAuthors()
    this.getBooks()

    this.categoryService.getAllCate().subscribe(
      cateList => this.cateList = JSON.parse(cateList.body || ""),
      err => console.log(err));

  }


  // not the right soluation, we are repeating our self the whole logic of the getAuthors must be in the authors service and just return a list of authors from there
  getAuthors()
  {
    this.authorServices.getAllAuthorsis(this.currentPageNumber).subscribe(
      authorsList => {
        let authros = JSON.parse(authorsList.body || "")
        this.totalPageNumber = authros.totalPages
        authros.authors.forEach((author:any) => {
          let localDate = new Date(author.cateId).toLocaleDateString("en-US")
          author.cateId = localDate

          author.image = "http://localhost:9000/" + author.image
        });

       this.authorsList = authros.authors
       console.log(this.authorsList)

      },
      err => console.log(err));

  }

  getAdminAction(adminAction:string, bookID?:string)
  {
    if(bookID != undefined)
      this.bookID = bookID

    this.adminActions = adminAction;
  }


  getBooks()
  {
    this.booksService.getAllBookss(this.currentPageNumber).subscribe(
      successRes => {
        let books = JSON.parse(successRes.body || "")
        this.totalPageNumber = books.totalPages
        books.books.forEach((book:any) => {
          book.image = "http://localhost:9000/" + book.image
        });

        this.booksList = books.books
        console.log(this.booksList)


      },
      err => console.log(err));
  }

  addBook(addBookForm:any)
  {

    const formData = new FormData();
    formData.append("title", this.bookInfo.title);
    formData.append("description", this.bookInfo.description);
    formData.append("authorId", this.bookInfo.authorId);
    formData.append("cateId", this.bookInfo.cateId);

    if(this.bookImage.nativeElement.files[0])
    {
      let fileSize:number = this.bookImage.nativeElement.files[0].size / 1000

      if(fileSize > 2000)
      {
        swal({
          title: "Maximum image size is 2M",
          icon : "error"
        });

        setTimeout(() => { swal.close() }, 2000)
        return;

      }
      else
      {
        formData.append("file", this.bookImage.nativeElement.files[0]);
      }
    }

    this.booksService.addBook(formData).subscribe(

      successRes =>
      {
        if(successRes.status == 200)
        {
          // if the author updated successfully then update the authors list by adding the newly added one
          let newBook = JSON.parse(successRes.body!)
          newBook.image = "http://localhost:9000/" + newBook.image

          if(this.booksList.length < 8)
            this.booksList.push(newBook)

          addBookForm.resetForm();

          swal({
            title: "Author has been added successfully!",
            icon : "success"
          });


          setTimeout(() => { swal.close() }, 2000)
        }
      },

      serverError =>
      {
        swal({
          title: "Something went wrong, try again later",
          icon : "error"
        });
        console.log(serverError)
        setTimeout(() => { swal.close() }, 2000)
      }


    )
  }


  updateBook(updateBookForm:any)
  {
    const formData = new FormData();

    // this is not an effieient soluation ... what if we have 15 proprty?
    if(this.bookInfo.title)
      formData.append("title", this.bookInfo.title);

    if(this.bookInfo.description)
      formData.append("description", this.bookInfo.description);

    if(this.bookInfo.cateId)
      formData.append("cateId", this.bookInfo.cateId);

    if(this.bookInfo.authorId)
      formData.append("authorId", this.bookInfo.authorId);


    if(this.bookImage.nativeElement.files[0])
    {
      let fileSize:number = this.bookImage.nativeElement.files[0].size / 1000

      if(fileSize > 2000)
      {
        swal({
          title: "Maximum image size is 2M",
          icon : "error"
        });

        setTimeout(() => {

          swal.close()
        }, 2000)

        return;
      }
      else
      {
        formData.append("file", this.bookImage.nativeElement.files[0]);
      }
    }

    this.booksService.updateBook(this.bookID, formData).subscribe(

      successRes =>
      {
        if(successRes.status == 200)
        {
          // if the author updated successfully then update the authors list
          let updatedBook = JSON.parse(successRes.body!)
          updatedBook.image = "http://localhost:9000/" + updatedBook.image

          let oldBookDetiles = this.booksList.find(author => {return author._id == this.bookID})

          if(oldBookDetiles != null)
            {
              oldBookDetiles.title = updatedBook.title
              oldBookDetiles.description = updatedBook.description
              oldBookDetiles.cateId = updatedBook.cateId
              oldBookDetiles.authorId = updatedBook.authorId
              oldBookDetiles.image = updatedBook.image
            }

          updateBookForm.resetForm();

          swal({
            title: "Author has been updated successfully!",
            icon : "success"
          });


          setTimeout(() => {

            swal.close()
            this.closeButton.nativeElement.click();
          }, 2000)
        }
      },

      serverError =>
      {
        swal({
          title: "Something went wrong, try again later",
          icon : "error"
        });
        console.log(serverError)
        setTimeout(() => {

          swal.close()
        }, 2000)
      }
    )
  }


//   // deleteAuthor()
//   // {
//   //   this.authorService.deleteAuthor(this.authorID).subscribe(
//   //     (successRes) =>
//   //     {

//   //       if(successRes.status == 200)
//   //       {
//   //         var filteredAuthorsList = this.authorsList.filter((el) => { return el._id != this.authorID });
//   //         this.authorsList = filteredAuthorsList

//   //         swal({
//   //           title: "Author has been removed successfully!",
//   //           icon : "success"
//   //         });

//   //         setTimeout(() => {

//   //           swal.close()
//   //           this.closeButton.nativeElement.click();
//   //         }, 2000)

//   //       }
//   //     })
//   // }

  prevPage()
  {
    if(this.currentPageNumber != 1)
    {
      this.currentPageNumber--
      this.getBooks()
    }
  }

  nextPage()
  {
    if(this.currentPageNumber < this.totalPageNumber)
    {
      this.currentPageNumber++
      this.getBooks()
    }
  }

}
