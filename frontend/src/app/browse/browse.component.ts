import { Component } from '@angular/core';
import { Fish } from '../fish';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StateService } from '../state.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {
  fishies$ = this.stateService.fishes$;
  fishFormGroup: FormGroup;
  curFishies = new Array<Fish>();


  constructor(private stateService: StateService){
    this.fishFormGroup = new FormGroup({});
    this.fishies$.subscribe(data => {
      for(let fish in data){
        this.curFishies.push(data[fish]);
      }
    })
    this.createFormGroup();
  }

  createFormGroup(){
    this.fishies$.subscribe(data => {
      for(let fish in data){
        this.fishFormGroup.addControl(data[fish].title, new FormGroup({
        quantity: new FormControl(0)
      }));
      }
    })
    console.log(this.fishFormGroup)
  }

  increment(group: string){
    const curGroup = this.fishFormGroup.get(group) as FormGroup;
    const curCount = curGroup.get("quantity")?.value;
    if(curCount == this.curFishies.find(fish => fish.title == group)?.count){
      return;
    }
    curGroup.get("quantity")?.setValue(curCount + 1)
  }

  decrement(group: string){
    const curGroup = this.fishFormGroup.get(group) as FormGroup;
    const curCount = curGroup.get("quantity")?.value;
    if (curCount == 0){
      return;
    }
    curGroup.get("quantity")?.setValue(curCount - 1)
  }

  addToCart(id: number){
    const curTitle = this.curFishies.find(fish => fish.id == id)?.title as string;
    const curGroup = this.fishFormGroup.get(curTitle) as FormGroup;
    const curCount = curGroup.get("quantity")?.value; 
    if(curCount > 0){ // validation
      this.stateService.putCart(id, curCount)
    }
  }
}
