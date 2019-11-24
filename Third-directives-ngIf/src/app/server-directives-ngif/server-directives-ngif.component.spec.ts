import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerDirectivesNgifComponent } from './server-directives-ngif.component';

describe('ServerDirectivesNgifComponent', () => {
  let component: ServerDirectivesNgifComponent;
  let fixture: ComponentFixture<ServerDirectivesNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerDirectivesNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerDirectivesNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
