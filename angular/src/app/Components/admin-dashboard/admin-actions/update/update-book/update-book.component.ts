import { Component } from '@angular/core';

@Component({
  selector: 'update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  catList:any[] = ["horor", "comady", "drama"]
  autList:any[] = ["islam", "mohamed", "mohamed", "Hasna"]


  updateBook()
  {
    alert("Update succ")
  }
}
