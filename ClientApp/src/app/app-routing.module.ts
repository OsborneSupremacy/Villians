import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillianSelectorComponent } from './villian-selector/villian-selector.component';
import { VillianAddComponent } from './villian-add/villian-add.component';
import { VillianEditComponent } from './villian-edit/villian-edit.component';

const routes: Routes = [
  {
    path: '',
    component: VillianSelectorComponent
  },
  {
    path: 'Add',
    component: VillianAddComponent
  },
  {
    path: 'Edit',
    component: VillianEditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
