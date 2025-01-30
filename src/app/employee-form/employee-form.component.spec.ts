import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxSnackbarComponent } from '@infragistics/igniteui-angular';
import { EmployeeFormComponent } from './employee-form.component';

describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EmployeeFormComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_INPUT_GROUP_DIRECTIVES, IGX_DATE_PICKER_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
