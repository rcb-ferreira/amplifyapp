import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    private apiUrl = 'https://teleforge.herokuapp.com/api';

    constructor(
        private http: HttpClient
    ) { }

    public showDequeue() {
        const url = `${this.apiUrl}/dequeue/show`;
        return this.http.get(url);
    }

    public appendDequeue(input = '') {
        const url = `${this.apiUrl}/dequeue/append`;
        return this.http.post(url, { input });
    }

    public prependDequeue(input = '') {
        const url = `${this.apiUrl}/dequeue/prepend`;
        return this.http.post(url, { input });
    }

    public ejectDequeue() {
        const url = `${this.apiUrl}/dequeue/eject`;
        return this.http.delete(url);
    }

    public popDequeue() {
        const url = `${this.apiUrl}/dequeue/pop`;
        return this.http.delete(url);
    }
}
