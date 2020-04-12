import { NgModule } from '@angular/core';
import { ClientItemComponent } from '../component/client-item/client-item.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ClientItemComponent
  ],
  imports: [ SharedModule ],
  exports: [ ClientItemComponent ]
})
export class ComponentsModule { }
