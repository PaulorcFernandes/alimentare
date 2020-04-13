import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ClientsService } from '../../services/clients.service';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { take } from 'rxjs/operators';



@Component({
  selector: 'app-client-save',
  templateUrl: './client-save.page.html',
  styleUrls: ['./client-save.page.scss'],
})
export class ClientSavePage implements OnInit {

  clientForm: FormGroup;
  pageTitle = '...';
  clientId: string = undefined;

  constructor(
    private fb: FormBuilder,
    private clientsService: ClientsService,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute
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
    console.log(clientId);
    this.pageTitle = 'Editar cliente';
    this.clientsService.get(clientId)
      .pipe(take(1))
        .subscribe(({socialName, cnpj, partner1,
          partner2, partner3, address, district, city, state, complement, dap, phone, nameResponsiblePerson,
          cpfResponsible,
          nameTechnicalManager,
          logo,
          enabled}) => {
          this.clientForm.get('socialName').setValue(socialName);
          this.clientForm.get('cnpj').setValue(cnpj);
          this.clientForm.get('partner1').setValue(partner1);
          this.clientForm.get('partner2').setValue(partner2);
          this.clientForm.get('partner3').setValue(partner3);
          this.clientForm.get('address').setValue(address);
          this.clientForm.get('district').setValue(district);
          this.clientForm.get('city').setValue(city);
          this.clientForm.get('state').setValue(state);
          this.clientForm.get('complement').setValue(complement);
          this.clientForm.get('dap').setValue(dap);
          this.clientForm.get('phone').setValue(phone);
          this.clientForm.get('nameResponsiblePerson').setValue(nameResponsiblePerson);
          this.clientForm.get('cpfResponsible').setValue(cpfResponsible);
          this.clientForm.get('nameTechnicalManager').setValue(nameTechnicalManager);
          this.clientForm.get('logo').setValue(logo);
          this.clientForm.get('enabled').setValue(enabled);
        });
  }

  private createForm(): void {
    this.clientForm = this.fb.group({
      socialName: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required]],
      partner1: [''],
      partner2: [''],
      partner3: [''],
      address: [''],
      district: [''],
      city: [''],
      state: [''],
      complement: [''],
      dap: [''],
      phone: ['', [Validators.required]],
      nameResponsiblePerson: [''],
      cpfResponsible: [''],
      nameTechnicalManager: [''],
      logo: [''],
      enabled: [true]
    });
  }

  get socialName(): FormControl {
    return <FormControl>this.clientForm.get('socialName');
  }

  get cnpj(): FormControl {
    return <FormControl>this.clientForm.get('cnpj');
  }

  get phone(): FormControl {
    return <FormControl>this.clientForm.get('phone');
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const client = !this.clientId
        ? await this.clientsService.create(this.clientForm.value)
        : await this.clientsService.update({
          id: this.clientId,
          ...this.clientForm.value
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
}
