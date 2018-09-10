import { NgModule } from "@angular/core";
import { MyLibraryComponent } from "./my-library.component";
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { BookshelveSliderComponent } from './bookshelve-slider/bookshelve-slider.component';
import { BookshelveSliderStartComponent } from './bookshelve-slider-start/bookshelve-slider-start.component';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5
};

@NgModule({
    declarations: [
        MyLibraryComponent,
        BookshelveSliderComponent,
        BookshelveSliderStartComponent
    ],
    imports: [
        SwiperModule,
        RouterModule,
        SharedModule
    ],
    providers: [
        {
            provide: SWIPER_CONFIG,
            useValue: DEFAULT_SWIPER_CONFIG
        }
    ],
    exports: [SwiperModule, RouterModule]
})

export class MyLibraryModule{

}