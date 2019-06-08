import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    private apiUrl = 'https://randomuser.me/api/';

    constructor(
        private http: HttpClient
    ) { }

    public getSettings() {
        const url = this.apiUrl;
        return this.http.get(url);
    }
}
