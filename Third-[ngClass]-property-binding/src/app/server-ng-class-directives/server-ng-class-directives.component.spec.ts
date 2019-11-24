import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerNgClassDirectivesComponent } from './server-ng-class-directives.component';

describe('ServerNgClassDirectivesComponent', () => {
  let component: ServerNgClassDirectivesComponent;
  let fixture: ComponentFixture<ServerNgClassDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerNgClassDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerNgClassDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
