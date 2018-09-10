import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common' 
import { SearchComponent } from "./search/search.component";
import { PublicComponent } from "./public.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgProgressModule } from '@ngx-progressbar/core';
import { EmbededViewComponent } from './embeded-view/embeded-view.component';
import { CoreModule } from "../core/core.module";
import { BookDetailModule } from "./book-detail/book-detail.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { MyLibraryModule } from "./my-library/my-library.module";

@NgModule({
    declarations: [
        SearchComponent,
        PublicComponent,
        EmbededViewComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        NgProgressModule,
        CoreModule,
        BookDetailModule,
        DashboardModule,
        MyLibraryModule
    ],
    exports: [
        RouterModule
    ]
})

export class PublicModule{

}