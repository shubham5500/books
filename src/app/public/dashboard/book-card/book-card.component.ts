import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  
  @Input('card') card; 
  @Input('cardIndex') cardIndex; 

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.card);
  }

  bookDetailClick(book){
    console.log(book);
    this.router.navigate(['/dashboard', book.id], {
      relativeTo: this.activatedRoute,
      preserveFragment: true
    })
  }
}
