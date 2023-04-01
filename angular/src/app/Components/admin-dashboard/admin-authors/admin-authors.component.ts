import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { IAuthor } from 'src/Models/iauthor';
import { AuthorServiceService } from 'src/Services/author-service.service';

@Component({
  selector: 'admin-authors',
  templateUrl: './admin-authors.component.html',
  styleUrls: ['./admin-authors.component.css']
})
export class AdminAuthorsComponent implements OnInit {

@ViewChild('authorImage') authorImage!:ElementRef;
@ViewChild('closeButton') closeButton!:ElementRef;

  adminActions:string = ""
  authorInfo:IAuthor =
  {
    name:"",
    bio:"",
    birthDate:"",
    authorImage:"",
  }

  authorID:string = ""

  totalPageNumber:number = 1;
  currentPageNumber:number = 1;

  authorsList:IAuthor[] = []
  constructor(private authorService:AuthorServiceService)
  {

  }



  ngOnInit() {
    this.getAuthors()
  }


  getAdminAction(adminAction:string, authorID?:string)
  {
    if(authorID != undefined)
      this.authorID = authorID

    this.adminActions = adminAction;
  }


  getAuthors()
  {
    this.authorService.getAllAuthorsis(this.currentPageNumber).subscribe(
      authorsList => {
        let authros = JSON.parse(authorsList.body || "")
        this.totalPageNumber = authros.totalPages
        authros.authors.forEach((author:any) => {
          let localDate = new Date(author.birthDate).toLocaleDateString("en-US")
          author.birthDate = localDate

          author.authorImage = "http://localhost:9000/" + author.authorImage
        });

       this.authorsList = authros.authors

      },
      err => console.log(err));

      return  this.authorsList
  }

  addAuthor(addAuthorForm:any)
  {

    const formData = new FormData();
    formData.append("name", this.authorInfo.name);
    formData.append("bio", this.authorInfo.bio);
    formData.append("birthDate", this.authorInfo.birthDate.toString());

    if(this.authorImage.nativeElement.files[0])
    {
      let fileSize:number = this.authorImage.nativeElement.files[0].size / 1000

      if(fileSize > 2000)
      {
        //@ts-ignore
        swal({
          title: "Maximum image size is 2M",
          icon : "error"
        });

        setTimeout(() => {
          //@ts-ignore
          swal.close()
          this.closeButton.nativeElement.click();
        }, 2000)

        return;
      }
      else
      {
        formData.append("file", this.authorImage.nativeElement.files[0]);
      }
    }

    this.authorService.addAuthor(formData).subscribe(

      successRes =>
      {
        if(successRes.status == 200)
        {
          // if the author updated successfully then update the authors list by adding the newly added one
          let newAuthor = JSON.parse(successRes.body!)
          newAuthor.authorImage = "http://localhost:9000/" + newAuthor.authorImage

          if(this.authorsList.length < 8)
            this.authorsList.push(newAuthor)

          addAuthorForm.resetForm();
          //@ts-ignore
          swal({
            title: "Author has been added successfully!",
            icon : "success"
          });


          setTimeout(() => {
            //@ts-ignore
            swal.close()
          }, 2000)
        }
      },

      serverError =>
      {
        //@ts-ignore
        swal({
          title: "Something went wrong, try again later",
          icon : "error"
        });
        console.log(serverError)
        setTimeout(() => {
          //@ts-ignore
          swal.close()
        }, 2000)
      }


    )
  }


  updateAuthor(updateAuthorForm:any)
  {
    const formData = new FormData();

    // this is not an effieient soluation ... what if we have 15 proprty?
    if(this.authorInfo.name)
      formData.append("name", this.authorInfo.name);


    if(this.authorInfo.bio)
      formData.append("bio", this.authorInfo.bio);

    if(this.authorInfo.birthDate)
      formData.append("birthDate", this.authorInfo.birthDate.toString());


    if(this.authorImage.nativeElement.files[0])
    {
      let fileSize:number = this.authorImage.nativeElement.files[0].size / 1000

      if(fileSize > 2000)
      {
        //@ts-ignore
        swal({
          title: "Maximum image size is 2M",
          icon : "error"
        });

        setTimeout(() => {
          //@ts-ignore
          swal.close()
        }, 2000)

        return;
      }
      else
      {
        formData.append("file", this.authorImage.nativeElement.files[0]);
      }
    }

    this.authorService.updateAuthor(this.authorID, formData).subscribe(

      successRes =>
      {
        if(successRes.status == 200)
        {
          // if the author updated successfully then update the authors list
          let updatedAuthor = JSON.parse(successRes.body!)
          updatedAuthor.authorImage = "http://localhost:9000/" + updatedAuthor.authorImage

          let oldAuthorDetiles = this.authorsList.find(author => {return author._id == this.authorID})

          if(oldAuthorDetiles != null)
            {
              oldAuthorDetiles.name = updatedAuthor.name
              oldAuthorDetiles.bio = updatedAuthor.bio
              oldAuthorDetiles.birthDate = updatedAuthor.birthDate
              oldAuthorDetiles.authorImage = updatedAuthor.authorImage
            }

          updateAuthorForm.resetForm();

          //@ts-ignore
          swal({
            title: "Author has been updated successfully!",
            icon : "success"
          });


          setTimeout(() => {
            //@ts-ignore
            swal.close()
            this.closeButton.nativeElement.click();
          }, 2000)
        }
      },

      serverError =>
      {
        //@ts-ignore
        swal({
          title: "Something went wrong, try again later",
          icon : "error"
        });
        console.log(serverError)
        setTimeout(() => {
          //@ts-ignore
          swal.close()
        }, 2000)
      }


    )
  }


  deleteAuthor()
  {
    this.authorService.deleteAuthor(this.authorID).subscribe(
      (successRes) =>
      {

        if(successRes.status == 200)
        {
          var filteredAuthorsList = this.authorsList.filter((el) => { return el._id != this.authorID });
          this.authorsList = filteredAuthorsList

          //@ts-ignore
          swal({
            title: "Author has been removed successfully!",
            icon : "success"
          });

          setTimeout(() => {
            //@ts-ignore
            swal.close()
            this.closeButton.nativeElement.click();
          }, 2000)

        }
      })
  }

  prevPage()
  {
    if(this.currentPageNumber != 1)
    {
      this.currentPageNumber--
      this.getAuthors()
    }
  }

  nextPage()
  {
    if(this.currentPageNumber < this.totalPageNumber)
    {
      this.currentPageNumber++
      this.getAuthors()
    }
  }

}
