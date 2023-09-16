import { Component } from '@angular/core';
import { StateService } from '../state.service';
import { Fish } from '../fish';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  fishies$ = this.stateService.fishes$;
  curFishies = new Array<Fish>();

   constructor(private stateService: StateService, public dialog: MatDialog){
    this.fishies$.subscribe(data => {
      for(let fish in data){
        this.curFishies.push(data[fish]);
      }
      console.log(this.curFishies)
    })
  }

  openEditDialog(id: number, title: string, description: string, count:number){
    console.log(id)
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data:{
        id: id,
        title: title,
        description: description, 
        count: count
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle modal close actions if needed
    });
  }

  confirmDelete(id:number, title: string){
    const result = window.confirm('Are you sure you want to delete this item\n'
     + 'item id: ' + id + '\nItem Title: ' + title)

     if(result){
      window.alert('Item deleted!')
     }else{
      console.log('Delete Canceled')
     }
  }
}
