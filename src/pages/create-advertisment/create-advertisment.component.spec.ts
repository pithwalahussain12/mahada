import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdvertismentComponent } from './create-advertisment.component';

describe('CreateAdvertismentComponent', () => {
  let component: CreateAdvertismentComponent;
  let fixture: ComponentFixture<CreateAdvertismentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdvertismentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
