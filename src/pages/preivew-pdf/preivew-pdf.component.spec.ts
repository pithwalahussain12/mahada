import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreivewPdfComponent } from './preivew-pdf.component';

describe('PreivewPdfComponent', () => {
  let component: PreivewPdfComponent;
  let fixture: ComponentFixture<PreivewPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreivewPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreivewPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
