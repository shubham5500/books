import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent
    ],
    imports: [
        SharedModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent
    ]
})

export class CoreModule{}