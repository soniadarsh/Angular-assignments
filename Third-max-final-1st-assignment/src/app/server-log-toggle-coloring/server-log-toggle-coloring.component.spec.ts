import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerLogToggleColoringComponent } from './server-log-toggle-coloring.component';

describe('ServerLogToggleColoringComponent', () => {
  let component: ServerLogToggleColoringComponent;
  let fixture: ComponentFixture<ServerLogToggleColoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerLogToggleColoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerLogToggleColoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
