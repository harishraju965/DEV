import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';

const routes: Routes = [
  {
    path: "addemp",
    component: AddempComponent
  },
  {
    path: "viewemp",
    component: ViewempComponent
  },
  {
    path: "editemp/:id",
    component: EditempComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
