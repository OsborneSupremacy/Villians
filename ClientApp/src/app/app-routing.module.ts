import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillianSelectorComponent } from './villian-selector/villian-selector.component';

const routes: Routes = [
  {
    path: '',
    component: VillianSelectorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
