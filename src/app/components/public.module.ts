import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common' 
import { PublicComponent } from "./public.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgProgressModule } from '@ngx-progressbar/core';
import { CoreModule } from "../core/core.module";
import { BookDetailModule } from "./book-detail/book-detail.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { MyLibraryModule } from "./my-library/my-library.module";
import { SearchModule } from "./search/search.module";

@NgModule({
    declarations: [
        PublicComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        NgProgressModule,
        CoreModule,
        BookDetailModule,
        DashboardModule,
        MyLibraryModule,
        SearchModule
    ],
    exports: [
        RouterModule
    ]
})

export class PublicModule{

}