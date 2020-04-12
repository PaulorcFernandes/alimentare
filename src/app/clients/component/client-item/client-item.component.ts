import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../../models/client.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss'],
})
export class ClientItemComponent {

  @Input() client: Client;
  @Output() done = new EventEmitter<Client>();
  @Output() update = new EventEmitter<Client>();
  @Output() delete = new EventEmitter<Client>();


  constructor( public actionSheetController: ActionSheetController) { }

  async menuClient(client) {
    const actionSheet =  await this.actionSheetController.create({
      header: 'Menu da Atividade',
      buttons: [{
        text: 'Editar',
        icon: 'create',
        handler: () => {
          console.log('editar share');
          this.update.emit(client);
        }
      }, {
        text: 'Deletar',
        icon: 'trash',
        handler: () => {
          console.log('deletar clicked');
          this.delete.emit(client);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}