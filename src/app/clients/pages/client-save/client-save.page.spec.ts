import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientSavePage } from './client-save.page';

describe('ClientSavePage', () => {
  let component: ClientSavePage;
  let fixture: ComponentFixture<ClientSavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientSavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
