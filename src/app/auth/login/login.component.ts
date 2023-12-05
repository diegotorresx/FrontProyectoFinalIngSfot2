import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {

    this.loginForm = this.formBuilder.group({
      email: ['carlos.blanco.amortegui@gmail.com', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required]],
      remember: [false]
    });
  }

  login(username: string, password: string) {

    console.log(this.loginForm.value)

    if (this.loginForm.invalid) {
      return;

    }

    this.authService.login(username, password).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        Swal.fire('Error', err, 'error')
      }
    });
  }
}
