import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CoinsPrototype } from '../coins';
import { COINS } from '../mock-coinsData';

@Injectable({
  providedIn: 'root'
})
export class CoinDetailsServiceService {

  constructor() { }

  getAllData() {
    // return this._http.get(this.baseURL,{ withCredentials: true })
    const coinData = of(COINS);
    console.log('Fetched all coins');
    return coinData;
  }
  getCoin(id: number): Observable<CoinsPrototype> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const myCoin = COINS.find(h => h.id === id)!;
    console.log(`Fetched coin id=${id}`);
    return of(myCoin);
  }
}
