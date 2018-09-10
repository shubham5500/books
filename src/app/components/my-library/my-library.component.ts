import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SearchService } from '../search.service';
import { SharedService } from '../../shared/shared.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.css']
})
export class MyLibraryComponent implements OnInit {
  
  bookshelves;

  constructor(private authService: AuthService,
              private searchService: SearchService,
              private loader: SharedService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getMyLibraryBookshelves();
  }

  getMyLibraryBookshelves(){
    this.authService.authState.subscribe((user)=>{
      if(user){
        this.loader.loader(true);
        this.searchService.getListOfBookshelves(user.authToken)
        .subscribe(
          (success: any)=>{
            this.loader.loader(false);
            this.bookshelves = success.items;
          },
          (error)=>{
            this.loader.loader(false);
            console.log('error', error)
          }
        );
      }
    });
  }

  onBookshelveClick(bookshelveId){
    this.router.navigate([bookshelveId], {
      relativeTo: this.activatedRoute
    })
  }

  
}
