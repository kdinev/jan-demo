import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxSnackbarComponent, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeDtoForm } from '../models/northwind-swagger/employee-dto-forms';
import { EmployeeDto } from '../models/northwind-swagger/employee-dto';
import { NorthwindSwaggerService } from '../services/northwind-swagger.service';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule, IGX_DATE_PICKER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxSnackbarComponent, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _selectedEmployee?: EmployeeDto;
  public get selectedEmployee(): EmployeeDto | undefined {
    return this._selectedEmployee;
  }
  public set selectedEmployee(value: EmployeeDto | undefined) {
    this._selectedEmployee = value;
    this.employeeDtoFormModel.reset(value);
  }
  public employeeDtoFormModel: FormGroup<EmployeeDtoForm>;
  public northwindSwaggerEmployeeDto: EmployeeDto[] = [];
  @ViewChild('snackbarsuccess')
  snackbarsuccess!: IgxSnackbarComponent;
  @ViewChild('snackbarerror')
  snackbarerror!: IgxSnackbarComponent;

  constructor(private northwindSwaggerService: NorthwindSwaggerService) {
    this.employeeDtoFormModel = this.createEmployeeDtoFormGroup();
  }

  ngOnInit() {
    this.northwindSwaggerService.getEmployeeDtoList().pipe(takeUntil(this.destroy$)).subscribe(data => this.northwindSwaggerEmployeeDto = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public listItemClick(item: EmployeeDto) {
    this.selectedEmployee = item;
  }

  public ngSubmitEmployeeDto() {
    this.northwindSwaggerService.postEmployeeDto(this.employeeDtoFormModel.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      if (data) {
        this.selectedEmployee = data;
        this.snackbarsuccess.open();
      }
      else {
        this.snackbarerror.open();
      }
    });
  }

  public onResetForm(e: Event) {
    e.preventDefault();
    this.employeeDtoFormModel.reset(this.selectedEmployee);
  }

  public createEmployeeDtoFormGroup() {
    return new FormGroup({
      employeeId: new FormControl(),
      lastName: new FormControl(),
      firstName: new FormControl(),
      title: new FormControl(),
      titleOfCourtesy: new FormControl(),
      birthDate: new FormControl(),
      hireDate: new FormControl(),
      addressId: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        region: new FormControl(),
        postalCode: new FormControl(),
        country: new FormControl(),
        phone: new FormControl(),
      }),
      notes: new FormControl(),
      avatarUrl: new FormControl(),
      reportsTo: new FormControl(),
    });
  }
}
