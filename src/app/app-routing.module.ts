import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SquareComponent } from './components/square/square.component';
const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // SquareComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
