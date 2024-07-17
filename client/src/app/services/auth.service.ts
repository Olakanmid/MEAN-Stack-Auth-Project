import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { aipUrls } from '../api.urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

http = inject(HttpClient);

registerService(registerObj : any){
  return this.http.post<any>(`${aipUrls.authServiceApi}register`, registerObj);
}

loginService(loginObj : any){
  return this.http.post<any>(`${aipUrls.authServiceApi}login`, loginObj);
}
sendEmailService(email: string){
  return this.http.post<any>(`${aipUrls.authServiceApi}send-email`, {email: email});
}
resetPasswordService(resetObj: any){
  return this.http.post<any>(`${aipUrls.authServiceApi}reset-password`, resetObj);
}
isLoggedIn(){
  return !!localStorage.getItem("user_id");
}
}
