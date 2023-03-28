import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
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

  totalPageNumber:number = 0;
  currentPageNumber:number = 1;

  authorsList:IAuthor[] = []
  constructor(private authorService:AuthorServiceService)
  {
    this.authorService.getAllAuthorsis(1).subscribe(
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
  }


  // private currentPageObs = new BehaviorSubject(false);
  // currentPageO = this.currentPageObs.asObservable();


  ngOnInit() {
  }


  getAdminAction(adminAction:string)
  {
    this.adminActions = adminAction;
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
        swal({
          title: "file maximum size is 2M",
          icon : "error"
        });

        setTimeout(() => {

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
          // if the category added successfully then update the category list by adding the newly added one
          let newAuthor = JSON.parse(successRes.body!)
          newAuthor.authorImage = "http://localhost:9000/" + newAuthor.authorImage
          this.authorsList.push(newAuthor)
          console.log(newAuthor)
          addAuthorForm.resetForm();

          swal({
            title: "Author has been added successfully!",
            icon : "success"
          });


          setTimeout(() => {

            swal.close()
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


  prevPage()
  {
    if(this.currentPageNumber != 0)
      this.currentPageNumber--
  }

  nextPage()
  {
    if(this.currentPageNumber < this.totalPageNumber)
      this.currentPageNumber++
  }

}
