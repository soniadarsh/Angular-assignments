import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerTwoWayBindComponent } from './server-two-way-bind.component';

describe('ServerTwoWayBindComponent', () => {
  let component: ServerTwoWayBindComponent;
  let fixture: ComponentFixture<ServerTwoWayBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerTwoWayBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerTwoWayBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
