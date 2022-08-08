import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router ){ }
  user={
    userName:'',
    passWord:''
  };

  userVerify()
  {
    // console.log(this.user)
 this.auth.userLogin(this.user).subscribe( (res)=>{localStorage.setItem('token',res.idToken);
//  console.log('token');
  this.router.navigate(['product-list'] );
});
   }

     
  ngOnInit(): void {
    
   
    
  }

}



