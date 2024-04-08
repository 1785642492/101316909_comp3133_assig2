import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly TOKEN_KEY = 'auth-token';

  constructor() {}

  login(username: string, password: string): Observable<any> {
   
    const fakeToken = '123456789111'; 
    localStorage.setItem(this.TOKEN_KEY, fakeToken); 
    return of({ user: username, token: fakeToken }); 
  }

  isLoggedIn(): boolean {
    
    const token = localStorage.getItem(this.TOKEN_KEY);
    return !!token; 
  }

  logout(): void {
    
    localStorage.removeItem(this.TOKEN_KEY);
  }


}
