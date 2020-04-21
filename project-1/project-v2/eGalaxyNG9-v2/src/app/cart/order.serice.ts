import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private url = 'http://localhost:9999/eGalaxy/api/orders';

    constructor(private http: HttpClient) {

    }



    createCart(order: Object): Observable<Object> {
        return this.http.post(`${this.url}`, order);
    }


    getOrdersList(): Observable<any> {
        return this.http.get(`${this.url}`);
    }
}