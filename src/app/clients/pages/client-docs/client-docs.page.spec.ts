import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientDocsPage } from './client-docs.page';

describe('ClientDocsPage', () => {
  let component: ClientDocsPage;
  let fixture: ComponentFixture<ClientDocsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDocsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientDocsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
