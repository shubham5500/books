import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  error;
  constructor(private serachService: SearchService,
              private router: Router,
              private loader: SharedService) { }

  ngOnInit() {
  }
  
  onBookSearch(form: NgForm){
    let value = form.value.search;
    if(value.length > 0){
      //Building the main search string by filter-reduce..
      let userQuery = value.split(' ').filter((queryVal)=>{
        if(queryVal){
          return value;
        }
      }).reduce((mainQuery, singleQuery)=>{
        return `${mainQuery}+${singleQuery}`;
      });
      this.loader.loader(true);
      this.serachService.getSearchBooks(userQuery).subscribe(
          (success: any)=>{
            this.loader.loader(false);
            // console.log('search se success');
            this.serachService.books = success.items;
            this.router.navigate(['/dashboard'], {
              fragment: userQuery
            });
          },
          (error)=>{
              console.log(error);
              this.error = error;
          }
      );
    }
    else{
      console.log('Kuch likh bhai');
    }
  }
}
