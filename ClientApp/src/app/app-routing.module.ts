import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillianSelectorComponent } from './villian-selector/villian-selector.component';
import { VillianAddComponent } from './villian-add/villian-add.component';

const routes: Routes = [
  {
    path: '',
    component: VillianSelectorComponent
  },
  {
    path: 'Add',
    component: VillianAddComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
