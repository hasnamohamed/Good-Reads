import { Component } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  item = {
      "_id":"49740974109740",
      "title":'Book1',
      "image":"https://placar.abril.com.br/wp-content/uploads/2022/09/GettyImages-1242668441.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
      "description":"this is book1",
      "authorName":"auth1",
      "catName":"cat1",
      "rating":{
        "totalVotes":12,
        "totalPoints":12,
        "rate":1
      }
    }
}
