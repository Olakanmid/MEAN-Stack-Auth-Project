import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateHeaderValue } from 'http';
import { confirmPasswordValidator } from '../../validator/confirm-password-validator';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export default class RegisterComponent implements OnInit {
 fb = inject(FormBuilder);  
 authService = inject(AuthService)
 router = inject(Router)

 registerForm !: FormGroup;

 ngOnInit(): void {
  this.registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  },
    {
      validator: confirmPasswordValidator('password', 'confirmPassword')
    }
  );
}

  register(){
     this.authService.registerService(this.registerForm.value)
     .subscribe({
      next: (res)=>{
        alert("User Created!")
        this.registerForm.reset();
        this.router.navigate(['login'])
      },
      error:(err)=>{
        console.log(err);
      }
     }) 
  }
}

