import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookDetailComponent } from "./book-detail.component";

const bookDetailRoutes: Routes = [
    {
        path: '',
        component: BookDetailComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(bookDetailRoutes)
    ]
})

export class BookDetailRoutingModule{}