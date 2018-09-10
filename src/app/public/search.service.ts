import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';

@Injectable()

export class SearchService{
    books:any;
    apiKey = 'AIzaSyAPoKI_722ygx7SihVAZQ4bROs-mQI-gEQ';
    constructor(private http: HttpClient){

    }

    getSearchBooks(query){
        console.log('Book hit');
        return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`);
    }
}