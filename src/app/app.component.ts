import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

export const AppRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'employee/:id', component: EmployeeDetailComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
];

@Component({
  selector: 'app-root',
  template: `
  `,
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    LoginComponent,
    SignupComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeDetailComponent,
    UpdateEmployeeComponent
  ]
})
export class AppComponent {}
