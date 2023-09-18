import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FishService } from '../fish.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  editFormGroup: FormGroup

  constructor(
   @Inject(MAT_DIALOG_DATA) public data: any,
   private formBuilder: FormBuilder,
   private fishService: FishService
  ) {
    this.editFormGroup = this.formBuilder.group({
      id: data.id,
      title: data.title,
      details: data.details,
      imgsrc: data.imgsrc,
      count: data.count
    })
  }

  ngOnInit() {
    // will log the entire data object
    console.log(this.data)
  }

  editConfirm(){
    console.log(this.editFormGroup.value)
    const editedFish = this.editFormGroup.value
    this.fishService.updateFish(editedFish).subscribe(
        (value) => alert("Fishies Modified successfully! :)"),
        (error) => console.error(`Error: ${error}`),
        () => console.log('Observable completed')
    )
  }
}
