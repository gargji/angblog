import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any
  msg:any
  data1:any
form:any = new FormGroup({
  email: new FormControl,
  password: new FormControl
})

  constructor(private s:AdminServiceService ,private router:Router) { }

  ngOnInit(): void {

  }
login(){
  // console.log(this.form.value)
  // this.s.admin_login(this.form.value).subscribe
  this.s.admin_login(this.form.value).subscribe(res=>{
    console.log(res)
   this. data=res
   this.data1=this.data.status
  //  for token storage
  const store=this.data.token
   
   localStorage.setItem("token",store)
   console.log(this.data1)
   const matter=this.data
   console.log(matter)
   console.log(localStorage.getItem("token"))
   if(this.data1=="success"){ 
    // this.s.setmsg(matter)
   
    this.form.reset();
    this.router.navigate(['admin-dashboard'],)}
    
else{
   this.msg="email password not vaild"
}
  

  },
  err=>{
    console.log(err)
      this.msg="not vaild user"
      // const msg1="not vaild user"

  }
  )
}
}
