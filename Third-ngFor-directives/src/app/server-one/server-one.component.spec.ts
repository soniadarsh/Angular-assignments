import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerOneComponent } from './server-one.component';

describe('ServerOneComponent', () => {
  let component: ServerOneComponent;
  let fixture: ComponentFixture<ServerOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
