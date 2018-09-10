import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { SharedService } from '../../shared/shared.service';
import { SearchService } from '../../components/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  error;
  loginInfo;
  subscription;
  user;
  
  constructor(private serachService: SearchService,
              private router: Router,
              private loader: SharedService,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) { }

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
              fragment: userQuery,
              relativeTo: this.activatedRoute
            });
          },
          (error)=>{
              console.log(error);
              this.error = error;
          }
      );
    }
  }

  login(){
    this.router.navigate(['dashboard/login'], {
      preserveFragment: true,
      queryParamsHandling: 'preserve'    
    })
  }
}
