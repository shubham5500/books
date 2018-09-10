import { Subject } from "rxjs";

export class BookDetailService{
    volumeIsbn = new Subject<any>();
    volumeDetail = new Subject<any>();
}