import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

Injectable()

export class AuthenticationService{
    loggedId = new Subject<boolean>();
}