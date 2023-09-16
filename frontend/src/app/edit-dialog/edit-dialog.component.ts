import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  editFormGroup: FormGroup

  constructor(
   @Inject(MAT_DIALOG_DATA) public data: any,
   private formBuilder: FormBuilder
  ) {
    this.editFormGroup = this.formBuilder.group({
      id: data.id,
      title: data.title,
      description: data.description,
      count: data.count
    })
  }

  ngOnInit() {
    // will log the entire data object
    console.log(this.data)
  }

  editConfirm(){
    console.log(this.editFormGroup.value)
    alert("Fishies Modified successfully! :)")
    // Then we will need to refresh the state. 
  }
}
