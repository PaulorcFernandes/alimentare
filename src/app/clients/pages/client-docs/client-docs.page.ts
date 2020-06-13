import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ClientsService } from '../../services/clients.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { OverlayService } from '../../../core/services/overlay.service';

@Component({
  selector: 'app-client-docs',
  templateUrl: './client-docs.page.html',
  styleUrls: ['./client-docs.page.scss'],
})
export class ClientDocsPage implements OnInit {
  documentsForm: FormGroup;
  clientId: string = undefined;
  logo: any;
  crq: any = false;
  alvara: any = false;
  licencaSanitaria: any = false;
  mapa: any = false;
  bombeiros: any = false;
  pgrs: any = false;
  bpfPop: any = false;
  ambiental: any = false;
  sonora: any = false;
  publicidadePropaganda: any = false;
  memorialDescritivo: any = false;
  memorialDescritivoFoto: any;
  crqDataAbertura: string;
  crqVencimento: string;

  constructor(private fb: FormBuilder,
              private clientsService: ClientsService,
              private route: ActivatedRoute,
              private navCtrl: NavController,
              private overlayService: OverlayService) { }

  ngOnInit() {
    this.createForm();
    this.init();
  }

  init(): void {
    const clientId = this.route.snapshot.paramMap.get('id');
    this.clientId = clientId;
    let convertDate = new Date().toISOString().substring(0, 10);
    this.clientsService.get(clientId)
      .pipe(take(1))
      .subscribe(({
        logo, crq, crqDataAbertura, crqVencimento, alvara, alvaraDataAbertura, alvaraVencimento, licencaSanitaria,
        licencaSanitariaDataAbertura,
        licencaSanitariaVencimento, mapa, mapaDataAbertura, mapaVencimento, bombeiros, bombeirosDataAbertura, bombeirosVencimento,
        pgrs, pgrsDataAbertura, pgrsVencimento, bpfPop, bpfPopDataAbertura, bpfPopVencimento, ambiental, ambientalDataAbertura,
        ambientalVencimento, sonora, sonoraDataAbertura, sonoraVencimento, publicidadePropaganda, publicidadePropagandaDataAbertura,
        publicidadePropagandaVencimento, memorialDescritivo, memorialDescritivoFoto, memorialDescritivoDescricao,
        enabled }) => {
        this.documentsForm.get('crq').setValue(crq);
        this.documentsForm.get('crqDataAbertura').setValue(new Date(crqDataAbertura));
        this.documentsForm.get('crqVencimento').setValue(new Date(crqVencimento));
        this.documentsForm.get('alvara').setValue(alvara);
        this.documentsForm.get('alvaraDataAbertura').setValue(new Date(alvaraDataAbertura));
        this.documentsForm.get('alvaraVencimento').setValue(new Date(alvaraVencimento));
        this.documentsForm.get('licencaSanitaria').setValue(licencaSanitaria);
        this.documentsForm.get('licencaSanitariaDataAbertura').setValue(new Date(licencaSanitariaDataAbertura));
        this.documentsForm.get('licencaSanitariaVencimento').setValue(new Date(licencaSanitariaVencimento));
        this.documentsForm.get('mapa').setValue(mapa);
        this.documentsForm.get('mapaDataAbertura').setValue(new Date(mapaDataAbertura));
        this.documentsForm.get('mapaVencimento').setValue(new Date(mapaVencimento));
        this.documentsForm.get('bombeiros').setValue(bombeiros);
        this.documentsForm.get('bombeirosDataAbertura').setValue(new Date(bombeirosDataAbertura));
        this.documentsForm.get('bombeirosVencimento').setValue(new Date(bombeirosVencimento));
        this.documentsForm.get('pgrs').setValue(pgrs);
        this.documentsForm.get('pgrsDataAbertura').setValue(new Date(pgrsDataAbertura));
        this.documentsForm.get('pgrsVencimento').setValue(new Date(pgrsVencimento));
        this.documentsForm.get('bpfPop').setValue(bpfPop);
        this.documentsForm.get('bpfPopDataAbertura').setValue(new Date(bpfPopDataAbertura));
        this.documentsForm.get('bpfPopVencimento').setValue(new Date(bpfPopVencimento));
        this.documentsForm.get('ambiental').setValue(ambiental);
        this.documentsForm.get('ambientalDataAbertura').setValue(new Date(ambientalDataAbertura));
        this.documentsForm.get('ambientalVencimento').setValue(new Date(ambientalVencimento));
        this.documentsForm.get('sonora').setValue(sonora);
        this.documentsForm.get('sonoraDataAbertura').setValue(new Date(sonoraDataAbertura));
        this.documentsForm.get('sonoraVencimento').setValue(new Date(sonoraVencimento));
        this.documentsForm.get('publicidadePropaganda').setValue(publicidadePropaganda);
        this.documentsForm.get('publicidadePropagandaDataAbertura').setValue(new Date(publicidadePropagandaDataAbertura));
        this.documentsForm.get('publicidadePropagandaVencimento').setValue(new Date(publicidadePropagandaVencimento));
        this.documentsForm.get('memorialDescritivo').setValue(memorialDescritivo);
        this.documentsForm.get('memorialDescritivoFoto').setValue(memorialDescritivoFoto);
        this.documentsForm.get('memorialDescritivoDescricao').setValue(memorialDescritivoDescricao);
      });
  }

  createForm() {
    this.documentsForm = this.fb.group({
      crq: [false],
      crqDataAbertura: [''],
      crqVencimento: [''],
      alvara: [false],
      alvaraDataAbertura: [''],
      alvaraVencimento: [''],
      licencaSanitaria: [false],
      licencaSanitariaDataAbertura: [''],
      licencaSanitariaVencimento: [''],
      mapa: [false],
      mapaDataAbertura: [''],
      mapaVencimento: [''],
      bombeiros: [false],
      bombeirosDataAbertura: [''],
      bombeirosVencimento: [''],
      pgrs: [false],
      pgrsDataAbertura: [''],
      pgrsVencimento: [''],
      bpfPop: [false],
      bpfPopDataAbertura: [''],
      bpfPopVencimento: [''],
      ambiental: [false],
      ambientalDataAbertura: [''],
      ambientalVencimento: [''],
      sonora: [false],
      sonoraDataAbertura: [''],
      sonoraVencimento: [''],
      publicidadePropaganda: [false],
      publicidadePropagandaDataAbertura: [''],
      publicidadePropagandaVencimento: [''],
      memorialDescritivo: [false],
      memorialDescritivoFoto: [''],
      memorialDescritivoDescricao: [''],
    });
  }

  async onSubmit() {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    this.documentsForm.value.crqDataAbertura = moment(this.documentsForm.value.crqDataAbertura).format('DD/MM/YYYY'),
      this.documentsForm.value.crqVencimento = moment(this.documentsForm.value.crqVencimento).format('DD/MM/YYYY'),
      this.documentsForm.value.alvaraDataAbertura = moment(this.documentsForm.value.alvaraDataAbertura).format('DD/MM/YYYY'),
      this.documentsForm.value.alvaraVencimento = moment(this.documentsForm.value.alvaraVencimento).format('DD/MM/YYYY'),
      this.documentsForm.value.licencaSanitaria = this.documentsForm.value.licencaSanitaria,
      this.documentsForm.value.licencaSanitariaDataAbertura =
        moment(this.documentsForm.value.licencaSanitariaDataAbertura).format('DD/MM/YYYY'),
      this.documentsForm.value.licencaSanitariaVencimento = 
        moment(this.documentsForm.value.licencaSanitariaVencimento).format('DD/MM/YYYY'),
      this.documentsForm.value.mapaDataAbertura = moment(this.documentsForm.value.mapaDataAbertura).format('DD/MM/YYYY'),
      this.documentsForm.value.mapaVencimento = moment(this.documentsForm.value.mapaVencimento).format('DD/MM/YYYY'),
      this.documentsForm.value.bombeirosDataAbertura = moment(this.documentsForm.value.bombeirosDataAbertura).format('DD/MM/YYYY'),
      this.documentsForm.value.bombeirosVencimento = moment(this.documentsForm.value.bombeirosVencimento).format('DD/MM/YYYY'),
      this.documentsForm.value.pgrsDataAbertura = moment(this.documentsForm.value.pgrsDataAbertura).format('DD/MM/YYYY'),
      this.documentsForm.value.pgrsVencimento = moment(this.documentsForm.value.pgrsVencimento).format('DD/MM/YYYY'),
      this.documentsForm.value.bpfPopDataAbertura = moment(this.documentsForm.value.bpfPopDataAbertura).format('DD/MM/YYYY'),
      this.documentsForm.value.bpfPopVencimento = moment(this.documentsForm.value.bpfPopVencimento).format('DD/MM/YYYY'),
      this.documentsForm.value.ambientalDataAbertura = moment(this.documentsForm.value.ambientalDataAbertura).format('DD/MM/YYYY'),
      this.documentsForm.value.ambientalVencimento = moment(this.documentsForm.value.ambientalVencimento).format('DD/MM/YYYY'),
      this.documentsForm.value.sonoraDataAbertura = moment(this.documentsForm.value.sonoraDataAbertura).format('DD/MM/YYYY'),
      this.documentsForm.value.sonoraVencimento = moment(this.documentsForm.value.sonoraVencimento).format('DD/MM/YYYY'),
      this.documentsForm.value.publicidadePropagandaDataAbertura =
      moment(this.documentsForm.value.publicidadePropagandaDataAbertura).format('DD/MM/YYYY'),
      this.documentsForm.value.publicidadePropagandaVencimento =
      moment(this.documentsForm.value.publicidadePropagandaVencimento).format('DD/MM/YYYY');
    try {
      const client = !this.clientId
        ? await this.clientsService.create(this.documentsForm.value)
        : await this.clientsService.update({
          id: this.clientId,
          ...this.documentsForm.value,
        });
      console.log('Salvou...', client);
      this.navCtrl.navigateBack('/clients-list');
    } catch (error) {
      console.log('Error...');
      await this.overlayService.toast({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }

}
