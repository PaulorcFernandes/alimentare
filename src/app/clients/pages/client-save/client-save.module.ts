import { NgModule } from '@angular/core';

import { ClientSavePage } from './client-save.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ClientSavePage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientSavePage]
})
export class ClientSavePageModule {}
