import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from '../../validator/confirm-password-validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  fb = inject(FormBuilder);  
  authService = inject(AuthService);
  router = inject(Router);
 
  loginForm !: FormGroup;

 ngOnInit(): void {
  this.loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
   password: ['', Validators.required],
  }
  );
}
login(){
  this.authService.loginService(this.loginForm.value)
  .subscribe({
   next: (res)=>{
     alert("Welcome!");
     localStorage.setItem("user_id", res.data._id);
     this.router.navigate(['home']);
     this.loginForm.reset();
   },
   error:(err)=>{
     console.log(err);
   }
  }) 
}
}