import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private url = 'http://localhost:9999/eGalaxy/api/carts';

    constructor(private http: HttpClient) {

    }

    getCart(id: number): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }

    createCart(cart: Object): Observable<Object> {
        return this.http.post(`${this.url}`, cart);
    }

    deleteCart(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
    }

    getCartsList(): Observable<any> {
        return this.http.get(`${this.url}`);
    }
}