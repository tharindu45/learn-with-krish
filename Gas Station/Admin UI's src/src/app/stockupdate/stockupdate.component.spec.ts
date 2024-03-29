import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockupdateComponent } from './stockupdate.component';

describe('StockupdateComponent', () => {
  let component: StockupdateComponent;
  let fixture: ComponentFixture<StockupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
