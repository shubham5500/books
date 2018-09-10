import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  loginInfo: boolean;
  user: SocialUser;
  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.getLogin();
  }

  onSideLinkClick(route){
    this.router.navigate([`${route}`], {
      preserveFragment: route !== '/' ? true : false
    })
  }

  getLogin(){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loginInfo = (user != null);
    });
  }

  myLibrary(){
    if(this.loginInfo){
      this.router.navigate(['dashboard', 'my-library'])
    }else{
      this.router.navigate(['dashboard', 'login'])
    }
  }

  logout(){
    this.authService.signOut();
  }

}
