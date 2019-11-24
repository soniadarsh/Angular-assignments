import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverNgStyleDirectivesComponent } from './sever-ng-style-directives.component';

describe('SeverNgStyleDirectivesComponent', () => {
  let component: SeverNgStyleDirectivesComponent;
  let fixture: ComponentFixture<SeverNgStyleDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverNgStyleDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverNgStyleDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
