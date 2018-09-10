import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-embeded-view',
  templateUrl: './embeded-view.component.html',
  styleUrls: ['./embeded-view.component.css']
})
export class EmbededViewComponent implements OnInit {

  viewInit = false;
  embedView;
  subscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    let isbn = (<any>this.activatedRoute.queryParams).value['isbn'];
    console.log('isbn', isbn);
    function alertNotFound() {
      alert("could not embed the book!");
    }
    function embededViewInitializer(bookId) {
      google.books.load();
      function initialize() {
        var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
        console.log('kyu bhai', bookId);
        viewer.load(`ISBN:${bookId}`, alertNotFound);
      }
      google.books.setOnLoadCallback(initialize);
    }
    embededViewInitializer(isbn);
    console.log('EMEMEMEMEM');
  }

  ngOnDestroy() {
  }

}
