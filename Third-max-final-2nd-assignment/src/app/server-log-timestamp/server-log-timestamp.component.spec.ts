import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerLogTimestampComponent } from './server-log-timestamp.component';

describe('ServerLogTimestampComponent', () => {
  let component: ServerLogTimestampComponent;
  let fixture: ComponentFixture<ServerLogTimestampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerLogTimestampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerLogTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
