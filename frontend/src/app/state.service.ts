import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fish } from './fish';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _cart = new BehaviorSubject<any>({} as any);
  private _fishes = new BehaviorSubject<Fish[]>(new Array<Fish>());

  constructor() {
    this._fishes.next([
    {
        id: 1,
        title: "Koi",
        details: "Nice Chinese Fish",
        imgSrc: "https://a-z-animals.com/media/2021/09/Koi-header.jpg",
        count: 3
      },
      {
        id: 2,
        title: 'Clownfish',
        details: 'Clownfish are small and colorful fish known for their symbiotic relationship with sea anemones.',
        imgSrc: 'https://plus.unsplash.com/premium_photo-1675727575394-f0e0af0d4f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80', 
        count: 5 
      },
      {
        id: 3,
        title: 'Blue Tang',
        details: 'Blue Tang is a popular fish with a vibrant blue color often seen in coral reefs.',
        imgSrc: 'https://i.imgur.com/VytbaU6.jpeg',
        count: 8 // Static count for Blue Tang
      },
      {
        id: 4,
        title: 'Angelfish',
        details: 'Angelfish are known for their graceful appearance and distinctive fin shapes.',
        imgSrc: 'https://i.imgflip.com/5it5a0.png', // Replace with actual image URL
        count: 3 // Static count for Angelfish
      },
  ])
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
}
