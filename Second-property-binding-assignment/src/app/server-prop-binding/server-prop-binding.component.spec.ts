import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerPropBindingComponent } from './server-prop-binding.component';

describe('ServerPropBindingComponent', () => {
  let component: ServerPropBindingComponent;
  let fixture: ComponentFixture<ServerPropBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerPropBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerPropBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
