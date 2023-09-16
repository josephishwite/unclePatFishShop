import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(public dialog: MatDialog){}

  openCartDialog(): void{
    const dialogRef = this.dialog.open(CartDialogComponent, {
      width: '400px', // Set the desired width
      // Other options like data, height, etc.
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle modal close actions if needed
    });
  }
}
