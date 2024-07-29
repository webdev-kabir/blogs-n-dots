import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import  { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import  { Router } from '@angular/router';
import  { MatSnackBar } from '@angular/material/snack-bar';
// import  { SharedSnackbarService } from 'src/app/shared/snackbar/shared-snackbar.service';
// import  { TokenService } from '../token.service';
// import  { AuthService } from '../auth.service';

@Component({
  selector: 'kc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;

  passwordHide = true;

  constructor(
    // private authService: AuthService,
    // private snack: SharedSnackbarService,
    // private tokenService: TokenService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {

    // if (this.authService.isLogin()) {
    //   this.router.navigate(['']);
    // }
  }

  loginForm: any = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
  });

  logIn(): void {

    this.isLoading =true

    // this.authService
    //   .login({
    //     email: this.loginForm.value.email,
    //     password: this.loginForm.value.password,
    //   })
    //   .subscribe((res) => {
    //     if (res.status ==='success'){
    //       this.isLoading =false
    //       this.tokenService.saveAccessToken(res.data.access_token);
    //       this.tokenService.saveRefreshToken(res.data.refresh_token);
    //       this.router.navigate(['']);
    //       this.cacheUserResourcePermission(res.data.access_token)
    //     }
    //   },error => {
    //     this.snack.openSnackBar('Error!',error,'sb-error')
    //     this.isLoading =false;
    //   });
  }

  logout(): void {
    // this.authService.logOut();
  }
  cacheUserResourcePermission(token: string){
    let obj =  JSON.parse(atob(token.split('.')[1]))
    let resourcePermissions= new  Map( );
    for (let i = 0; i <  obj.data.resources.length; i++) {
      let permission=new Set();
      for (let j = 0; j <  obj.data.resources[i]["roles"].length; j++) {
        for (let k=0;k<obj.data.resources[i]["roles"][j]["permissions"].length;k++){
          permission.add(obj.data.resources[i]["roles"][j]["permissions"][k]["name"])
        }
      }
      resourcePermissions.set(obj.data.resources[i]["name"], [...permission])
    }
    localStorage.setItem('resourceWisePermissions', JSON.stringify(Array.from(resourcePermissions.entries())));
  }
}
