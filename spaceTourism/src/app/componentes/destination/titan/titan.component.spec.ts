import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitanComponent } from './titan.component';

describe('TitanComponent', () => {
  let component: TitanComponent;
  let fixture: ComponentFixture<TitanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
