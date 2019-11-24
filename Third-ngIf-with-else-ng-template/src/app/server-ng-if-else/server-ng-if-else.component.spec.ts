import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNgIfElseComponent } from './server-ng-if-else.component';

describe('ServerNgIfElseComponent', () => {
  let component: ServerNgIfElseComponent;
  let fixture: ComponentFixture<ServerNgIfElseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerNgIfElseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerNgIfElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
