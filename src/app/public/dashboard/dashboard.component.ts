import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  booksArray;
  fragmentValue;
  constructor(private searchService: SearchService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {    
    this.booksArray = this.searchService.books;
    this.activatedRoute.fragment.subscribe(
      (success)=>{
        // Checking if booksArray has the books coming 
        // from the Home search page if not then
        // we're again getting the books from the url fragment query
        this.fragmentValue = success;
         if(!this.booksArray){
            this.gettingBooks(success);
         }
         else{
          this.booksArray = this.searchService.books;
         }
      }
    );

    this.activatedRoute.queryParams.subscribe(
      (params: Params)=>{
        // Checking is user has filtered the search if yes 
        // then we're subscribing to the QueryParams and hitting the API again.
        if(params['filter']){
          let query = `${(<any>this.activatedRoute.fragment).value}&filter=${params.filter}`;
          this.gettingBooks(query);
        }else{
          // If filter is selected to "none"...
          this.gettingBooks(this.fragmentValue);
          // console.log('no query params and fragment', this.fragmentValue);
        }
      }
    )
  }

  gettingBooks(text){
    this.searchService.getSearchBooks(text).subscribe(
      (booksSuccess: any)=>{
        console.log('dashboard se success');
        this.booksArray = booksSuccess.items; 
        // console.log(this.booksArray);           
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
