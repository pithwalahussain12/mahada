import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdvertismentComponent } from './list-advertisment.component';

describe('ListAdvertismentComponent', () => {
  let component: ListAdvertismentComponent;
  let fixture: ComponentFixture<ListAdvertismentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdvertismentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAdvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
