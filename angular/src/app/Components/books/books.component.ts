import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any;
  constructor(private service:BookService) {
  }
  ngOnInit() {
    this.service.getBooks()
      .subscribe(response => {
        this.books = response;
      });
  }
  items = [
    {
    "_id":"49740974109740",
    "title":'Book1',
    "image":"https://placar.abril.com.br/wp-content/uploads/2022/09/GettyImages-1242668441.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
    "description":"this is book1",
    "authorId":"auth1",
    "catId":"cat1",
    "rating":{
    "totalVotes":12,
      "totalPoints":12,
      "rate":1
    }
  },
    {
      "_id":"49740974109740",
      "title":'Book2',
      "image":"https://placar.abril.com.br/wp-content/uploads/2022/09/GettyImages-1242668441.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
      "description":"this is book2",
      "authorId":"auth2",
      "catId":"cat2",
      "rating":{
        "totalVotes":12,
        "totalPoints":12,
        "rate":2
      }
    },
    {
      "_id":"49740974109740",
      "title":'Book3',
      "image":"https://placar.abril.com.br/wp-content/uploads/2022/09/GettyImages-1242668441.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
      "description":"this is book3",
      "authorId":"auth3",
      "catId":"cat3",
      "rating":{
        "totalVotes":12,
        "totalPoints":12,
        "rate":3
      }
    },
    {
      "_id":"49740974109740",
      "title":'Book1',
      "image":"https://placar.abril.com.br/wp-content/uploads/2022/09/GettyImages-1242668441.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
      "description":"this is book1",
      "authorId":"auth1",
      "catId":"cat1",
      "rating":{
        "totalVotes":12,
        "totalPoints":12,
        "rate":1
      }
    },
    {
      "_id":"49740974109740",
      "title":'Book2',
      "image":"https://placar.abril.com.br/wp-content/uploads/2022/09/GettyImages-1242668441.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
      "description":"this is book2",
      "authorId":"auth2",
      "catId":"cat2",
      "rating":{
        "totalVotes":12,
        "totalPoints":12,
        "rate":2
      }
    },
    {
      "_id":"49740974109740",
      "title":'Book3',
      "image":"https://placar.abril.com.br/wp-content/uploads/2022/09/GettyImages-1242668441.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
      "description":"this is book3",
      "authorId":"auth3",
      "catId":"cat3",
      "rating":{
        "totalVotes":12,
        "totalPoints":12,
        "rate":3
      }
    },
    {
      "_id":"49740974109740",
      "title":'Book1',
      "image":"https://placar.abril.com.br/wp-content/uploads/2022/09/GettyImages-1242668441.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
      "description":"this is book1",
      "authorId":"auth1",
      "catId":"cat1",
      "rating":{
        "totalVotes":12,
        "totalPoints":12,
        "rate":1
      }
    },
    {
      "_id":"49740974109740",
      "title":'Book2',
      "image":"https://placar.abril.com.br/wp-content/uploads/2022/09/GettyImages-1242668441.jpg?quality=70&strip=info&w=1280&h=720&crop=1",
      "description":"this is book2",
      "authorId":"auth2",
      "catId":"cat2",
      "rating":{
        "totalVotes":12,
        "totalPoints":12,
        "rate":2
      }
    }
  ];
  addItem(newItem: any) {
    this.items.push(newItem);
  }
}
