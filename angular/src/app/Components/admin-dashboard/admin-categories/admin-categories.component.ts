import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { categoryInfo } from 'src/app/db-models/category';
import { CategoriesService } from 'src/app/services/categories.service';


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
  constructor(private categoriesService:CategoriesService, private routerService:Router) {
    this.categoriesService.getAllCate().subscribe(
      catList => this.catList = JSON.parse(catList.body || ""),
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
      // @ts-ignore
      swal({
        title: "Category is Already existed!",
        icon: "error"
      }).then((r: any) =>{}) ;

      setTimeout(() => {

        // @ts-ignore
        swal.close?.()
        this.closeButton.nativeElement.click();
      }, 2000)

      return;
    }

    // else add the category to the category list
    this.categoriesService.addCate(cateName.toLowerCase()).subscribe(
      (data) =>
      {
        if(data.status == 200)
        {
          // if the category added successfully then update the category list by adding the newly added one
          let newCat = JSON.parse(data.body!);
          this.catList.push(newCat)
          // @ts-ignore
          swal({
            title: "Category has been created successfully!",
            icon : "success"
          });

          setTimeout(() => {
            // @ts-ignore
            swal.close()
            this.cateInput.nativeElement.value = ""
            this.closeButton.nativeElement.click();
          }, 2000)
        }
      },

      )
  }

  updateCate(cateName:string)
  {
    this.categoriesService.updateCate(this.catID!, cateName).subscribe(
      (data) =>
      {
        if(data.status == 200)
        {

          let oldCat = this.catList.find(cat => {return cat._id == this.catID})

          if(oldCat != null)
            oldCat.name = cateName
          // @ts-ignore
          swal({
            title: "Category has been updated successfully!",
            icon : "success"
          });

          setTimeout(() => {
            // @ts-ignore
            swal.close()
            this.closeButton.nativeElement.click();
            this.updatedCategory.nativeElement.value = ""
          }, 2000)

        }
      })
    }

  deleteCate()
  {
    this.categoriesService.deleteCate(this.catID!).subscribe(
      (data) =>
      {

        if(data.status == 200)
        {

          var filteredCatList = this.catList.filter((el) => { return el._id != this.catID });
          this.catList = filteredCatList
          // @ts-ignore
          swal({
            title: "Category has been removed successfully!",
            icon : "success"
          });

          setTimeout(() => {
            // @ts-ignore
            swal.close()
            this.closeButton.nativeElement.click();
          }, 2000)

        }
      })
  }

}
