import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()

export class SharedService{
    loaderSubject = new Subject<any>();
    logginEmitter = new EventEmitter();
    loader(status){
        if(status === true){
            this.loaderSubject.next(true);
        }else{
            this.loaderSubject.next(false);
        }
    }
}