import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookDetailService } from '../book-detail.service';

@Component({
  selector: 'app-book-image',
  templateUrl: './book-image.component.html',
  styleUrls: ['./book-image.component.css']
})
export class BookImageComponent implements OnInit {

  volumeInfo;
  subcription: Subscription;

  constructor(private bookDetailService: BookDetailService) { }

  ngOnInit() {
    this.subcription = this.bookDetailService.volumeDetail.subscribe(
      (success)=>{
        this.volumeInfo = success.volumeInfo;
        console.log(' this.volumeInfo',  this.volumeInfo);
        if(this.volumeInfo.imageLinks['extraLarge']){
          this.volumeInfo = this.volumeInfo.imageLinks.extraLarge;
        }else if(this.volumeInfo.imageLinks['large']){
          this.volumeInfo = this.volumeInfo.imageLinks.large;
        }else if(this.volumeInfo.imageLinks['medium']){
          this.volumeInfo = this.volumeInfo.imageLinks.medium;
        }else if(this.volumeInfo.imageLinks['thumbnail']){
          this.volumeInfo = this.volumeInfo.imageLinks.thumbnail;
        }else{
          this.volumeInfo = '/assets/error-large.png';
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
