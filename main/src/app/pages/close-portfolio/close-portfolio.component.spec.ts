import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosePortfolioComponent } from './close-portfolio.component';

describe('ClosePortfolioComponent', () => {
  let component: ClosePortfolioComponent;
  let fixture: ComponentFixture<ClosePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosePortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
