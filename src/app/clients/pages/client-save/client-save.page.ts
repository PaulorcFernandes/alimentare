import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ClientsService } from '../../services/clients.service';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { take } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { Client } from '../../models/client.model';
import * as moment from 'moment';



@Component({
  selector: 'app-client-save',
  templateUrl: './client-save.page.html',
  styleUrls: ['./client-save.page.scss'],
})
export class ClientSavePage implements OnInit {

  clientForm: FormGroup;
  dadosForm: FormGroup;
  adressForm: FormGroup;
  respForm: FormGroup;
  documentsForm: FormGroup;
  pageTitle = '...';
  clientId: string = undefined;
  filestring: any;
  fotos: any;
  srcResult: any;
  files: any;
  

  constructor(
    private fb: FormBuilder,
    private clientsService: ClientsService,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.init();
  }

  init(): void {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (!clientId) {
      this.pageTitle = 'Adicionar cliente';
      return;
    }
    this.clientId = clientId;
    let convertDate = new Date().toISOString().substring(0, 10);
    this.pageTitle = 'Editar cliente';
    this.clientsService.get(clientId)
      .pipe(take(1))
        .subscribe(({socialName, cnpj, partner1,
          partner2, partner3, address, district, city, state, complement, dap, phone, nameResponsiblePerson,
          cpfResponsible,
          nameTechnicalManager,
          logo, crq, crqDataAbertura, crqVencimento, alvara, alvaraDataAbertura, alvaraVencimento, licencaSanitaria,
          licencaSanitariaDataAbertura,
          licencaSanitariaVencimento, mapa, mapaDataAbertura, mapaVencimento, bombeiros, bombeirosDataAbertura, bombeirosVencimento,
          pgrs, pgrsDataAbertura, pgrsVencimento, bpfPop, bpfPopDataAbertura, bpfPopVencimento, ambiental, ambientalDataAbertura,
          ambientalVencimento, sonora, sonoraDataAbertura, sonoraVencimento, publicidadePropaganda, publicidadePropagandaDataAbertura,
          publicidadePropagandaVencimento, memorialDescritivo, memorialDescritivoFoto, memorialDescritivoDescricao,
          enabled}) => {
          this.dadosForm.get('socialName').setValue(socialName);
          this.dadosForm.get('cnpj').setValue(cnpj);
          this.dadosForm.get('partner1').setValue(partner1);
          this.dadosForm.get('partner2').setValue(partner2);
          this.dadosForm.get('partner3').setValue(partner3);
          this.adressForm.get('address').setValue(address);
          this.adressForm.get('district').setValue(district);
          this.adressForm.get('city').setValue(city);
          this.adressForm.get('state').setValue(state);
          this.adressForm.get('complement').setValue(complement);
          this.dadosForm.get('dap').setValue(dap);
          this.dadosForm.get('phone').setValue(phone);
          this.respForm.get('nameResponsiblePerson').setValue(nameResponsiblePerson);
          this.respForm.get('cpfResponsible').setValue(cpfResponsible);
          this.respForm.get('nameTechnicalManager').setValue(nameTechnicalManager);
          this.dadosForm.get('logo').setValue(logo);
          this.dadosForm.get('enabled').setValue(enabled);
          this.documentsForm.get('crq').setValue(crq);
          this.documentsForm.get('crqDataAbertura').setValue(new Date(crqDataAbertura));
          this.documentsForm.get('crqVencimento').setValue(new Date(crqVencimento));
          this.documentsForm.get('alvara').setValue(alvara);
          this.documentsForm.get('alvaraDataAbertura').setValue(new Date(alvaraDataAbertura), {
            onlyself: true
          });
          this.documentsForm.get('alvaraVencimento').setValue(new Date(alvaraVencimento), {
            onlyself: true
          });
          this.documentsForm.get('licencaSanitaria').setValue(licencaSanitaria);
          this.documentsForm.get('licencaSanitariaDataAbertura').setValue(new Date(licencaSanitariaDataAbertura));
          this.documentsForm.get('licencaSanitariaDataAbertura').setValue(new Date(licencaSanitariaDataAbertura));
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
          
          this.filestring = logo;
        });
  }

  private createForm(): void {
    this.dadosForm = this.fb.group({
      logo: [''],
     /*  nomeFantasia: ['', [Validators.required, Validators.minLength(3)]], */
      socialName: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required]],
      partner1: [''],
      partner2: [''],
      partner3: [''],
      dap: [''],
      phone: ['', [Validators.required]],
      enabled: [true]
    });
    this.adressForm = this.fb.group({
      address: [''],
      district: [''],
      city: [''],
      state: [''],
      complement: [''],
    });
    this.respForm = this.fb.group({
      nameResponsiblePerson: [''],
      cpfResponsible: [''],
      nameTechnicalManager: [''],
    });
  }

  get socialName(): FormControl {
    return <FormControl>this.dadosForm.get('socialName');
  }

  get cnpj(): FormControl {
    return <FormControl>this.dadosForm.get('cnpj');
  }

  get phone(): FormControl {
    return <FormControl>this.dadosForm.get('phone');
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    this.dadosForm.value.logo = this.filestring ? this.filestring : '';
    this.clientForm = this.fb.group({
      socialName: this.dadosForm.value.socialName,
      cnpj: this.dadosForm.value.cnpj,
      partner1: this.dadosForm.value.partner1,
      partner2: this.dadosForm.value.partner2,
      partner3: this.dadosForm.value.partner3,
      address: this.adressForm.value.address,
      district: this.adressForm.value.district,
      city: this.adressForm.value.city,
      state: this.adressForm.value.state,
      complement: this.adressForm.value.complement,
      dap: this.dadosForm.value.dap,
      phone: this.dadosForm.value.phone,
      nameResponsiblePerson: this.respForm.value.nameResponsiblePerson,
      cpfResponsible: this.respForm.value.cpfResponsible,
      nameTechnicalManager: this.respForm.value.nameTechnicalManager,
      logo: this.dadosForm.value.logo,
      enabled: [true],
    });
    try {
      const client = !this.clientId
        ? await this.clientsService.create(this.clientForm.value)
        : await this.clientsService.update({
          id: this.clientId,
          ...this.clientForm.value,
        });
      console.log('Salvou...' , client );
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

  getFiles(event) {
    this.files = event.target.files;
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.files[0]);
    console.log(this.files)
}

_handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.filestring = 'data:image/png' + ';base64,' + btoa(binaryString);  // Converting binary string data.
    console.log(this.filestring)
}

sanitize(url: string) {
  //return url;
  return this.sanitizer.bypassSecurityTrustUrl(url);
}
}
