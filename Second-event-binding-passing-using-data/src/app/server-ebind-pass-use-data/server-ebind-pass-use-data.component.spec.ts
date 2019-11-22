import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerEbindPassUseDataComponent } from './server-ebind-pass-use-data.component';

describe('ServerEbindPassUseDataComponent', () => {
  let component: ServerEbindPassUseDataComponent;
  let fixture: ComponentFixture<ServerEbindPassUseDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerEbindPassUseDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerEbindPassUseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
