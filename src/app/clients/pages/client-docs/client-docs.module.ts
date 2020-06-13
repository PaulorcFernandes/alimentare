import { NgModule } from '@angular/core';

import { ClientDocsPageRoutingModule } from './client-docs-routing.module';

import { ClientDocsPage } from './client-docs.page';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    ClientDocsPageRoutingModule
  ],
  declarations: [ClientDocsPage]
})
export class ClientDocsPageModule {}
