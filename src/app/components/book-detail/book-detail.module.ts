import { NgModule } from "@angular/core";
import { BookDetailComponent } from "./book-detail.component";
import { BookInfoComponent } from "./book-info/book-info.component";
import { BookImageComponent } from "./book-image/book-image.component";
import { SharedModule } from "../../shared/shared.module";
import { StarRatingDirective } from "../../directives/star-rating.directive";
@NgModule({
    declarations: [
        BookDetailComponent,
        BookInfoComponent,
        BookImageComponent,
        StarRatingDirective
    ],
    imports: [
        SharedModule
    ]
})

export class BookDetailModule{}