import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./search.component";

const searchRoute: Routes = [
    {
        path: '',
        component: SearchComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(searchRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class SearchRoutingModule{

}