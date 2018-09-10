import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  activatedRouteState;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.url[0].path);
    this.activatedRouteState = this.activatedRoute.snapshot.url[0].path;
  }

  onSideLinkClick(route){
    this.router.navigate([`${route}`], {
      preserveFragment: route !== '/' ? true : false
    })
  }

}
