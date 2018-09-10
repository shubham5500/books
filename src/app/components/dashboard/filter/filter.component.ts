import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterBy = [
    {
      id: 0,
      title: 'None',
      value: ''
    },
    {
      id: 1,
      title: 'Ebooks',
      value: 'ebooks'
    },
    {
      id: 2,
      title: 'Paid-ebooks',
      value: 'paid-ebooks'
    },
    {
      id: 3,
      title: 'Free-ebooks',
      value: 'free-ebooks'
    },
    {
      id: 4,
      title: 'Full-books',
      value: 'full'
    }
  ];

  selectedFilter: any;
  

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectBoxCheckAutomatic();
  }


  // This function runs whenever user changes the filter of the book,
  // if user has select value to something other than "none" then if block is running
  // else the else block...
  filterChange(option, type){
    let selectObj;
    if(type == 'select'){
      selectObj = this.filterBy.filter((filterObj)=>{
        return option.value == filterObj.title;
      });  
    }else{
      selectObj = this.filterBy.filter((filterObj)=>{
        return option.title == filterObj.title;
      }); 
    }
    
    let obj = selectObj[0];

    if(this.filterBy[obj.id].value){
      this.router.navigate(['dashboard'], {
        queryParams: {
          filter: this.filterBy[obj.id].value
        },
        preserveFragment: true
      });
    }
    else{
      this.router.navigate(['dashboard'], {
        preserveFragment: true
      });
    }
  }

  selectBoxCheckAutomatic(){
    this.activatedRoute.queryParams.subscribe(
      (queryParams)=>{
        // Here we're checking if queryParams has filter property set to anything
        // by the user if yes then we're selecting the select option by [selected] directive set on the
        // select option by checking the id of the filter property set by the user and if not selected anything
        // or selected to "none" which is by default then else block is running...
        if(queryParams['filter']){
          let selected = this.filterBy.filter((filterObject)=>{
            return filterObject.value == queryParams.filter;
          });         
          this.selectedFilter = selected[0];
          this.filterChange(this.selectedFilter, 'params');
        }
        else{
          this.selectedFilter = this.filterBy[0];
        }
      }  
    )
  }

}
