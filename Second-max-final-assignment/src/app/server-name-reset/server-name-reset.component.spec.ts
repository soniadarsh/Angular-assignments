import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNameResetComponent } from './server-name-reset.component';

describe('ServerNameResetComponent', () => {
  let component: ServerNameResetComponent;
  let fixture: ComponentFixture<ServerNameResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerNameResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerNameResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
