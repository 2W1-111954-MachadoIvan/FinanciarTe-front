import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/Services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public loginForm!: FormGroup
  changeType: boolean = true;
  visible: boolean = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private nav: NavbarService) {


    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.nav.hide()
  }
}
