import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
    {path: 'browse', component: BrowseComponent},
    {path: 'admin-home', component: AdminHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
