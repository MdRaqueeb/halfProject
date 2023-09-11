import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private httpClient:HttpClient) { }

  public showCart() : Observable<any>
  {
    const options={
      withCredentials:true
    }
      return this.httpClient.get('http://localhost:8087/cart/mybooks',options);
  }

  public deleteItem(id:number): Observable<any>
  {
    return this.httpClient.delete('http://localhost:8087/cart/'+Number(id));
  }

}
