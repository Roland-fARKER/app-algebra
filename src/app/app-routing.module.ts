import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { OurstoryComponent } from './components/ourstory/ourstory.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'ourstory', component:OurstoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
