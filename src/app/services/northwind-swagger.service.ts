import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { EmployeeDto } from '../models/northwind-swagger/employee-dto';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class NorthwindSwaggerService {
  constructor(
    private http: HttpClient
  ) { }

  public getEmployeeDtoList(): Observable<EmployeeDto[]> {
    return this.http.get<EmployeeDto[]>(`${API_ENDPOINT}/Employees`)
      .pipe(catchError(ErrorHandlerService.handleError<EmployeeDto[]>('getEmployeeDtoList', [])));
  }

  public postEmployeeDto(data: any): Observable<EmployeeDto | undefined> {
    if (!data) {
      return of(undefined);
    }
    const options = {
      headers: {
        Authorization: 'Bearer <auth_value>',
      },
    };
    const body = data;
    return this.http.post<EmployeeDto | undefined>(`${API_ENDPOINT}/Employees`, body, options)
      .pipe(catchError(ErrorHandlerService.handleError<EmployeeDto | undefined>('postEmployeeDto', undefined)));
  }
}
