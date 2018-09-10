import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from "../auth/sign-in/sign-in.component";
import { SearchComponent } from "../components/search/search.component";
import { PublicComponent } from "../components/public.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { BookDetailComponent } from "../components/book-detail/book-detail.component";
import { EmbededViewComponent } from "../components/embeded-view/embeded-view.component";
import { MyLibraryComponent } from "../components/my-library/my-library.component";
import { BookshelveSliderStartComponent } from "../components/my-library/bookshelve-slider-start/bookshelve-slider-start.component";
import { BookshelveSliderComponent } from "../components/my-library/bookshelve-slider/bookshelve-slider.component";

const appRoutes: Routes = [
    {
        path: '',
        component: SearchComponent,
        pathMatch: 'full'
    },
    {
        path: 'sign-in',
        component: SignInComponent
    },
    {
        path: 'dashboard',
        component: PublicComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: SignInComponent
            },
            {
                path: 'my-library',
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
            },
            {
                path: ':id',
                component: BookDetailComponent
            },
            {
                path: ':id/view-sample',
                component: EmbededViewComponent
            },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{

}