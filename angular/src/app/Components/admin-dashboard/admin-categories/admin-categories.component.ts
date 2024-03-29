import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { categoryInfo } from 'src/Models/category';
import { CategoriesService } from 'src/Services/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit, OnChanges{

@ViewChild('closeButton') closeButton!:ElementRef;
@ViewChild('updatedCategory') updatedCategory!:ElementRef;
@ViewChild('cateInput') cateInput!:ElementRef;


  adminActions:string = ""
  catID:string | null = "";

  newCat:categoryInfo =
  {
    _id:"",
    name:""
  }
  catList:categoryInfo[]  = []

  totalPageNumber:number = 1;
  currentPageNumber:number = 1;


  constructor(private categoriesService:CategoriesService, private routerService:Router) {
    this.categoriesService.getAllCate(this.currentPageNumber.toString()).subscribe(
      catList =>
      {
        let incomingCateList = JSON.parse(catList.body || "")

        this.catList = incomingCateList.cats
        this.totalPageNumber = incomingCateList.totalPages
      },

      err => console.log(err));
  }

  ngOnInit()
  {

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  setAdminAction(adminAction:string , id?:string )
  {
    if(id != null)
    {
      this.catID = id;
    }
    this.adminActions = adminAction;
  }

  addCate(cateName:String)
  {
    // check if the category is already existed
    let claimCate = this.catList.findIndex(cate => cateName == cate.name)
    if(claimCate != -1)
    {
      swal({
        title: "Category is Already existed!",
        icon: "error"
      }).then((r: any) =>{}) ;

      setTimeout(() => {


        swal.close()
        this.closeButton.nativeElement.click();
      }, 2000)

      return;
    }

    // else add the category to the category list
    this.categoriesService.addCate(cateName.toLowerCase()).subscribe(
      (sucessRes) =>
      {
        if(sucessRes.status == 200)
        {
          // if the category added successfully then update the category list by adding the newly added one
          let newCat = JSON.parse(sucessRes.body!);
          this.catList.push(newCat)

          swal({
            title: "Category has been created successfully!",
            icon : "success"
          });

          setTimeout(() => {

            swal.close()
            this.cateInput.nativeElement.value = ""
            this.closeButton.nativeElement.click();
          }, 2000)
        }
      },

      errorRes =>
      {
        if(errorRes.status == 403)
        {
          swal({
            title: "Unauthorized Action, Real Admins Has Been Reported",
            icon : "error"
          });

        }
        console.log(errorRes)
        setTimeout(() => { swal.close() }, 1000)
        setTimeout(() => { this.routerService.navigate(['/'])}, 2000)

      }

      )
  }

  updateCate(cateName:string)
  {
    this.categoriesService.updateCate(this.catID!, cateName).subscribe(
      (sucessRes) =>
      {
        if(sucessRes.status == 200)
        {

          let oldCat = this.catList.find(cat => {return cat._id == this.catID})

          if(oldCat != null)
            oldCat.name = cateName


          swal({
            title: "Category has been updated successfully!",
            icon : "success"
          });

          setTimeout(() => {

            swal.close()
            this.closeButton.nativeElement.click();
            this.updatedCategory.nativeElement.value = ""
          }, 2000)

        }
      },
      errorRes =>
      {
        if(errorRes.status == 403)
        {
          swal({
            title: "Unauthorized Action, Real Admins Has Been Reported",
            icon : "error"
          });

        }
        console.log(errorRes)
        setTimeout(() => { swal.close() }, 1000)
        setTimeout(() => { this.routerService.navigate(['/'])}, 2000)

      }
      )
    }

  deleteCate()
  {
    this.categoriesService.deleteCate(this.catID!).subscribe(
      (sucessRes) =>
      {

        if(sucessRes.status == 200)
        {

          var filteredCatList = this.catList.filter((el) => { return el._id != this.catID });
          this.catList = filteredCatList

          swal({
            title: "Category has been removed successfully!",
            icon : "success"
          });

          setTimeout(() => {

            swal.close()
            this.closeButton.nativeElement.click();
          }, 2000)

        }
      },
      errorRes =>
      {
        if(errorRes.status == 403)
        {
          swal({
            title: "Unauthorized Action, Real Admins Has Been Reported",
            icon : "error"
          });

        }
        console.log(errorRes)
        setTimeout(() => { swal.close() }, 1000)
        setTimeout(() => { this.routerService.navigate(['/'])}, 2000)

      }
      )
  }

  prevPage()
  {
    if(this.currentPageNumber != 1)
    {
      this.currentPageNumber--
      this.categoriesService.getAllCate(this.currentPageNumber.toString()).subscribe(
        catList => this.catList = JSON.parse(catList.body || ""),
        err => console.log(err));
    }
  }

  nextPage()
  {
    if(this.currentPageNumber < this.totalPageNumber)
    {
      this.currentPageNumber++
      this.categoriesService.getAllCate(this.currentPageNumber.toString()).subscribe(
        catList => this.catList = JSON.parse(catList.body || ""),
        err => console.log(err));
    }
  }

}
