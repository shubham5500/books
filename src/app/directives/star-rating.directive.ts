import { Directive, Renderer2, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appStarRating]'
})
export class StarRatingDirective {
  
  @Input('appStarRating') starRatingNumber;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  
  ngOnInit(): void {
     let i = this.starRatingNumber;
     for(i = 0; i < 4; i++){
      const span = this.renderer.createElement('span');
      this.renderer.addClass(span, 'fas');
      this.renderer.addClass(span, 'fa-star');
      this.renderer.appendChild(this.elementRef.nativeElement, span);
     }
  }
}
