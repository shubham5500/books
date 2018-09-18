import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { SignInComponent } from "../auth/sign-in/sign-in.component";
import { SearchComponent } from "../components/search/search.component";
import { PublicComponent } from "../components/public.component";
import { EmbededViewComponent } from "../components/embeded-view/embeded-view.component";

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
                loadChildren: '../components/dashboard/dashboard.module#DashboardModule'
                 //This above is lazy loading route, this module will be loaded whenever it is neccessary to be loaded and that is called lazy loading
            },
            {
                path: 'login',
                component: SignInComponent
            },
            {
                path: 'my-library',
                loadChildren: '../components/my-library/my-library.module#MyLibraryModule',
                //This above is lazy loading route, this module will be loaded whenever it is neccessary to be loaded and that is called lazy loading
            },
            {
                path: ':id',
                loadChildren: '../components/book-detail/book-detail.module#BookDetailModule'
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
        RouterModule.forRoot(appRoutes, {
            preloadingStrategy: PreloadAllModules
            // This above tells "preloadingStrategy: PreloadAllModules" the browser to preload all the lazy loaded routes while the user is browsing some other page it is for optimizing and boosting the performance of the app..
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{
}
