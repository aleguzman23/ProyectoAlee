import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

  validData() {
    const User : User = {
      email: this.form.value.Email,
      password: this.form.value.Password
    }

    /*console.log(this.form);
    console.log(User);*/

    if (User.password != '' && User.email != '') {
      this.router.navigate(['/dashboard']);
    }
  }



  ngOnInit(): void {
  }

}
