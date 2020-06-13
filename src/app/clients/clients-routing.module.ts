import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'create',
        loadChildren: './pages/client-save/client-save.module#ClientSavePageModule',
      },
      {
        path: 'edit/:id',
        loadChildren: './pages/client-save/client-save.module#ClientSavePageModule',
      },
      {
        path: '',
        loadChildren: './pages/clients-list/clients-list.module#ClientsListPageModule',
      },
      {
        path: 'docs/:id',
        loadChildren: './pages/client-docs/client-docs.module#ClientDocsPageModule',
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
