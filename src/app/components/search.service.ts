import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';

@Injectable()

export class SearchService{

    books:any;
    apiKey = 'AIzaSyAPoKI_722ygx7SihVAZQ4bROs-mQI-gEQ';

    constructor(private http: HttpClient){}

    getSearchBooks(query){
        console.log('Book hit');
        return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&key=${this.apiKey}`);
    }

    getVolumeInfo(volumeId){
        console.log('Volume Hit')
        return this.http.get(`https://www.googleapis.com/books/v1/volumes/${volumeId}?key=${this.apiKey}`);
    }

    getListOfBookshelves(token){
        return this.http.get(`https://www.googleapis.com/books/v1/mylibrary/bookshelves?key=${this.apiKey}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }

    getVolumeOfBookShelve(id, token){
        return this.http.get(`https://www.googleapis.com/books/v1/mylibrary/bookshelves/${id}/volumes?key=${this.apiKey}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    }

    addVolumeToMyBookshelve(token, bookshelveId, volumeId){
        return this.http.post(`https://www.googleapis.com/books/v1/mylibrary/bookshelves/${bookshelveId}/addVolume?volumeId=${volumeId}&key=${this.apiKey}`,'',{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Content-Length': 'CONTENT_LENGTH'
            }
        });
    }
    
    removeVolumeToMyBookshelve(token, bookshelveId, volumeId){
        return this.http.post(`https://www.googleapis.com/books/v1/mylibrary/bookshelves/${bookshelveId}/removeVolume?volumeId=${volumeId}&key=${this.apiKey}`,'',{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Content-Length': 'CONTENT_LENGTH'
            }
        });
    }
    
}