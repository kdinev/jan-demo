import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_HIERARCHICAL_GRID_DIRECTIVES } from '@infragistics/igniteui-angular';
import { HGridComponent } from './h-grid.component';

describe('HGridComponent', () => {
  let component: HGridComponent;
  let fixture: ComponentFixture<HGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HGridComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_HIERARCHICAL_GRID_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
