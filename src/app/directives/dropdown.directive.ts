import { Directive, Renderer2, ElementRef, Input, HostListener } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @Input('appDropdown') dropdownRef: ElementRef;
  @Input('activeButton') aButton: ElementRef;

  loggedIn;

  constructor(private renderer: Renderer2,
              private authService: AuthService,
              private router: Router,
              private elementRef: ElementRef) { }
  
  ngOnInit(): void {
    this.authService.authState.subscribe(
      (user)=>{
        this.loggedIn = (user != null);
      }
    )
  }

  @HostListener('click') onDropdownClick(){
    if(this.loggedIn){
      this.renderer.addClass(this.dropdownRef, 'show');
      // this.renderer.addClass(this.aButton, 'active');
    }else{
      this.router.navigate(['dashboard', 'login']);
    }
  }

  @HostListener('focusout') onDropdownUnclick(){
   setTimeout(() => {
    this.renderer.removeClass(this.dropdownRef, 'show');
    this.renderer.removeClass(this.aButton, 'active');
   }, 200);
  }
  
}
