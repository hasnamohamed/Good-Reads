import { Component } from '@angular/core';

@Component({
  selector: 'update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent {


  updateAuthor()
  {
    alert("updated successfully")
  }
}
