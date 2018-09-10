import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent,
          SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { SearchService } from '../../search.service';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-bookshelve-slider',
  templateUrl: './bookshelve-slider.component.html',
  styleUrls: ['./bookshelve-slider.component.css']
})
export class BookshelveSliderComponent implements OnInit {
  
  bookshelveId;
  volumes;
  user;
  @ViewChild('swiperSlider') sliderRef: SwiperComponent;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    loop: true,
    slideToClickedSlide: true,
  };

  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private searchService: SearchService,
              private loader: SharedService,
              private snackBar: MatSnackBar,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params)=>{
        this.bookshelveId = params['id'];
        this.getVolumeOfBookshelves(this.bookshelveId);
      }
    );
  }
  
  slide(type){
    if(this.volumes){
      type === 'next' ? this.sliderRef.directiveRef.nextSlide() : this.sliderRef.directiveRef.prevSlide();
    } 
  }

  getVolumeOfBookshelves(id){
    this.authService.authState.subscribe((user)=>{
        this.user = user;
        this.loader.loader(true);
        if(this.user){
          this.searchService.getVolumeOfBookShelve(id, this.user.authToken)
          .subscribe(
            (success: any)=>{
              this.loader.loader(false);
              this.volumes = success.items;
            },
            (error)=>{
              this.loader.loader(false);
              console.log('error', error)
            }
          );
        }
    });
  }

  gotoVolumeDetail(volumeId){
    this.router.navigate(['/dashboard', volumeId])
  }

  removeVolumeFromBookshelve(id, index){
    this.loader.loader(true);
    this.searchService.removeVolumeToMyBookshelve(this.user.authToken, this.bookshelveId, id)
    .subscribe(
      (success)=>{
        this.loader.loader(false);
        this.volumes.splice(index, 1);
        this.snackBar.open('Removed Successfully', 'OK', {
          duration: 2000
        })
      },
      (error)=>{
        this.loader.loader(false);
        console.log('error', error);
      }
    )
  }
}
