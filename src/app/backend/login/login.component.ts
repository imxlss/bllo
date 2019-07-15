import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private service: CommonService) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const userInfo = {
      username: this.validateForm.value.userName,
      password: this.validateForm.value.password
    };

    console.log(userInfo);

    // this.service.postData('/register', userInfo)
    this.service.post('/signin', userInfo).subscribe(res => {
      console.log(res);
    });
  }

  logout() {
    this.service.get('/signout').subscribe(res => {
      console.log(res);
    });
  }
}
