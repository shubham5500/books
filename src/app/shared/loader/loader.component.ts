import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  
  @ViewChild('progressBar') progressBar;

  constructor(public loaderService: SharedService) { }

  ngOnInit() {
    this.loaderService.loaderSubject.subscribe(
      (status)=>{
        if(status){
          this.progressBar.start();
        }else{
          this.progressBar.complete();
        }
      }
    );
  }

}
