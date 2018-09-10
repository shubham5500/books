import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DropdownDirective } from "../directives/dropdown.directive";

@NgModule({
    declarations: [
        DropdownDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        DropdownDirective
    ]
})

export class SharedModule{

}