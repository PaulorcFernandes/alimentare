import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from '../../../shared/shared.module';
import { ClientsListPage } from './clients-list.page';




const routes: Routes = [
  {
    path: '',
    component: ClientsListPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientsListPage]
})
export class ClientsListPageModule {}
