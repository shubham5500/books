import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { PublicComponent } from "../public.component";
import { FilterComponent } from "./filter/filter.component";
import { BookCardComponent } from "./book-card/book-card.component";
// import { EmbededViewComponent } from "../embeded-view/embeded-view.component";

const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: FilterComponent,
                pathMatch: 'full'
            },
            {
                path: '',
                component: BookCardComponent,
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class DashboardRoutingModule{}