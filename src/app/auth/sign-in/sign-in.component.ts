import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private loggedIn: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private location: Location) {}

  ngOnInit() {
    this.getLogin();
  }
  
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
   
  getLogin(){
    this.authService.authState.subscribe((user) => {
      this.loggedIn = (user != null);
    });
  }

  goBack(){
    this.location.back();
  }
  
  goToMylibary(){
    this.router.navigate(['dashboard', 'my-library']);
  }
}
