import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search.service';
import { BookDetailService } from './book-detail.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  
  volumeInfo;
  viewSample = false;
  constructor(private activatedRoute: ActivatedRoute,
              private searchService: SearchService,
              private bookDetailService: BookDetailService,
              private loader: SharedService) {
              }

  ngOnInit() {
    this.gettingBookInfo();
  }

  gettingBookInfo(){
    this.loader.loader(true);
    let volumeId = this.activatedRoute.snapshot.params['id'];
    this.searchService.getVolumeInfo(volumeId).subscribe(
      (success: any)=>{
        this.loader.loader(false);
        this.volumeInfo = success;
        // console.log('volumeDetail', success);
        this.bookDetailService.volumeDetail.next(success);
      },
      (error)=>{
        this.loader.loader(false);
        console.log('error', error);
      }
    )
  }
}
