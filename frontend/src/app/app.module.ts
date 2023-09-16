import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseComponent } from './browse/browse.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    AdminHomeComponent,
    CartDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
