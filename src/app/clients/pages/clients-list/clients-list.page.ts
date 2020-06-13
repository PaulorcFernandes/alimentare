import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../models/client.model';
import { ClientsService } from '../../services/clients.service';  
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { NotifierService } from 'angular-notifier';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.page.html',
  styleUrls: ['./clients-list.page.scss'],
})
export class ClientsListPage {

  clients$: Observable<Client[]>;

  constructor( private navCtrl: NavController,
               private clientsService: ClientsService,
               private overlayService: OverlayService,
               private notifier: NotifierService) { }

   async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.clients$ = this.clientsService.getAll();
    this.clients$.pipe(take(1)).subscribe( clients => loading.dismiss());
  }

  public showNotification( type: string, message: string ): void {
    this.notifier.notify( type, message );
  }

  onUpdate(client: Client): void {
    this.navCtrl.navigateForward(`/clients-list/edit/${client.id}`);
  }

  onDocs(client: Client): void {
    this.navCtrl.navigateForward(`/clients-list/docs/${client.id}`);
  }

  async onDelete(client: Client): Promise<void> {
    await this.overlayService.alert({
      message: `Deseja deletar a tarefa "${client.socialName}"?`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.clientsService.delete(client);
            await this.overlayService.toast({
              message: `Cliente "${client.socialName}" deletada!`
            });
          }
        },
        'Não'
      ]
    });
  }
}