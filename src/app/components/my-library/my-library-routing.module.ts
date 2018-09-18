import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyLibraryComponent } from "./my-library.component";
import { BookshelveSliderStartComponent } from "./bookshelve-slider-start/bookshelve-slider-start.component";
import { BookshelveSliderComponent } from "./bookshelve-slider/bookshelve-slider.component";

const mylibraryRoutes: Routes = [
    {
        path: '',
        component: MyLibraryComponent,
        children: [
            {
                path: '',
                component: BookshelveSliderStartComponent,
                pathMatch: 'full'
            },
            {
                path: ':id',
                component: BookshelveSliderComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(mylibraryRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class MyLibraryRoutingModule{

}