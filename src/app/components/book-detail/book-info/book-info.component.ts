import { Component, OnInit, ViewChild } from '@angular/core';
import { BookDetailService } from '../book-detail.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'angularx-social-login';
import { SearchService } from '../../search.service';
import { SharedService } from '../../../shared/shared.service';
@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  volumeInfo;
  subcription: Subscription;
  volumeId;
  loggedIn;
  bookshelveIds = [
    {
      title: 'Favorites',
      id: 0
    },
    {
      title: 'To Read',
      id: 2
    },
    {
      title: 'Reading Now',
      id: 3
    },
    {
      title: 'Have Read',
      id: 4
    }
  ];

  constructor(private bookDetailService: BookDetailService,
              private router: Router,
              private snackBar: MatSnackBar,
              private loader: SharedService,
              private authService: AuthService,
              private searchService: SearchService) { }

  ngOnInit() {
    this.gettingVolumeInfo();
    this.gettingLoginInfo();
  }

  // viewSampleClick(){
  //   // this.router.navigate(['dashboard', this.volumeId, 'view-sample'], {
  //   //   queryParams: {
  //   //     'isbn': this.volumeInfo.industryIdentifiers[0].identifier 
  //   //   }
  //   // })
  //   this.snackBar.open('A dummy message', 'OK')
  // }

  addToMyLibraryClick(id){
    console.log('click pe loggedIn',this.loggedIn.authToken, id, this.volumeId);
    if(this.loggedIn){
      this.loader.loader(true);
      this.searchService.addVolumeToMyBookshelve(this.loggedIn.authToken, id, this.volumeId)
      .subscribe(
        (success)=>{
          this.loader.loader(false);
          this.snackBar.open(`Book added to ${this.bookshelveIds[id].title}`, 'OK', {
            duration: 2000
          });
        },
        (error)=>{
          console.log('error', error)
        }
      )
      console.log(this.volumeId, 'salkakshdhasjldkj')
    }
  }

  gettingVolumeInfo(){
    this.subcription = this.bookDetailService.volumeDetail.subscribe(
      (success)=>{
        this.volumeInfo = success.volumeInfo;
        this.volumeId = success.id;
      }
    );
  }

  gettingLoginInfo(){
    this.authService.authState.subscribe(
      (user)=>{
        this.loggedIn = user;
        console.log('bookinfo se loggedIn', this.loggedIn)
      }
    )
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

}
