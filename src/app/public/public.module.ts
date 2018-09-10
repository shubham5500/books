import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common' 
import { SearchComponent } from "./search/search.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PublicComponent } from "./public.component";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookCardComponent } from './dashboard/book-card/book-card.component';
import { FormsModule } from "@angular/forms";
import { BookDetailComponent } from './book-detail/book-detail.component';
import { FilterComponent } from './dashboard/filter/filter.component';

@NgModule({
    declarations: [
        SearchComponent,
        DashboardComponent,
        PublicComponent,
        HeaderComponent,
        SidebarComponent,
        BookCardComponent,
        BookDetailComponent,
        FilterComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        RouterModule
    ]
})

export class PublicModule{

}