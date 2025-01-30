import { FormControl, FormGroup } from '@angular/forms';
import { AddressDtoForm } from './address-dto-forms';

export interface EmployeeDtoForm {
  employeeId: FormControl<number | null>
  lastName: FormControl<string | null>
  firstName: FormControl<string | null>
  title: FormControl<string | null>
  titleOfCourtesy: FormControl<string | null>
  birthDate: FormControl<Date | null>
  hireDate: FormControl<Date | null>
  addressId: FormControl<string | null>
  address: FormGroup<AddressDtoForm>
  notes: FormControl<string | null>
  avatarUrl: FormControl<string | null>
  reportsTo: FormControl<number | null>
}
