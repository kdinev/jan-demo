import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { HGridComponent } from './h-grid/h-grid.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'h-grid', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  {
    path: 'h-grid',
    component: HGridComponent,
    data: {
      text: 'h-grid'
    }
  },
  {
    path: 'employee-form',
    component: EmployeeFormComponent,
    data: {
      text: 'employee-form'
    }
  },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
