import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { FilterComponent } from "./filter/filter.component";
import { BookCardComponent } from "./book-card/book-card.component";
import { SharedModule } from "../../shared/shared.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
    declarations: [
        DashboardComponent,
        FilterComponent,
        BookCardComponent,
    ],
    imports: [
        SharedModule,
        DashboardRoutingModule
    ]
})

export class DashboardModule{}