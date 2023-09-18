import { Component } from '@angular/core';
import { StateService } from '../state.service';
import { Fish } from '../fish';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { FishService } from '../fish.service';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  fishies$ = this.stateService.fishes$;
  curFishies = new Array<Fish>();

   constructor(private stateService: StateService, public dialog: MatDialog, private fishService: FishService, private location: Location){
    this.fishies$.subscribe(data => {
      for(let fish in data){
        this.curFishies.push(data[fish]);
      }
    })
  }

  openEditDialog(id: number, title: string, details: string, imgsrc: string, count:number){
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data:{
        id: id,
        title: title,
        details: details, 
        count: count,
        imgsrc: imgsrc
      }
    });

    dialogRef.afterClosed().pipe(
        switchMap(()=> this.fishService.getFishies())
      ).subscribe(data =>{
        console.log(data)
        this.curFishies = data
        this.stateService.getFishies()
    })
  }

  confirmDelete(id:number, title: string){
    const result = window.confirm('Are you sure you want to delete this item\n'
     + 'item id: ' + id + '\nItem Title: ' + title)

     if(result){
      this.fishService.deleteFish(id).pipe(
        switchMap(()=> this.fishService.getFishies())
      ).subscribe(data =>{
        window.alert('Item deleted!')
        this.curFishies = data
        this.stateService.getFishies()
      })
     }else{
      console.log('Delete Canceled')
     }
  }
}
