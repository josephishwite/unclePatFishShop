import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Fish } from './fish';
import { FishService } from './fish.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _cart = new BehaviorSubject<any>({} as any);
  private _fishes = new BehaviorSubject<Fish[]>(new Array<Fish>());

  constructor(private fishService: FishService) {
    this.getFishies()
  }

  get cart$(){
    return this._cart.asObservable();
  }

  get fishes$(){
    return this._fishes.asObservable();
  }

  incrementCartItem(id: number) {
    let curCount = this._cart.getValue().id;
    let tempData = [];
    if(curCount === undefined){
      tempData= {...this._cart.getValue(), id: 1};
    }else{
      tempData = {...this._cart.getValue(), id: curCount + 1};
    }

    this._cart.next(tempData);
  }

  decrementCartItem(id: number) {
    let curCount = this._cart.getValue().id;
    let tempData = [];
    if(curCount === undefined || curCount === 0){
      tempData= {...this._cart.getValue(), id: 0};
    }else{
      tempData = {...this._cart.getValue(), id: curCount - 1};
    }

    this._cart.next(tempData);
  }

  putCart(id: number, count: number){
    const tempData = {...this._cart.getValue(), [id]: count};
    this._cart.next(tempData);
  }

  getFishies(){
    this._fishes = new BehaviorSubject<Fish[]>(new Array<Fish>());
    this.fishService.getFishies().subscribe(data => {
      this._fishes.next(data)
    })
  }
}
