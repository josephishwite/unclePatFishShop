import { Component, StateKey} from '@angular/core';
import { StateService } from '../state.service';
import { Fish } from '../fish';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
})
export class CartDialogComponent {
  fishies$ = this.stateService.fishes$;
  cart$ = this.stateService.cart$;
  curCart = {};
  curFishies = new Array<Fish>();
  cart = true;
  checkout = false;

  Object = Object

  constructor(private stateService: StateService){
    this.fishies$.subscribe(data=> {
      this.curFishies = Object.assign([], data)
      console.log(this.curFishies)
    })
    this.cart$.subscribe(data=> {
      this.curCart = Object.assign({}, data)
      console.log(this.curCart)
    })
  }

  isEmpty() {
    return Object.keys(this.curCart).length === 0;
  }

  getFish(id: string){
    return this.curFishies.find(fish => fish.id == Number(id))
  }

  checkOutClick(){
    this.cart = false
    this.checkout = true;
  }
}
