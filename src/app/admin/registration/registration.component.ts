import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
data:any
form:any
msg:any
  constructor( private s:AdminServiceService ,private router:Router) { }
  // form:any = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // })

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmpassword: new FormControl('')
    })
    // console.log(this.form.value)
  }
  // insert(data:any){
  // this.s.sendregisterdetails(data).subscribe((res)=>{
  //   console.log(res)
  //   this.s=data


  //   this.router.navigate(['/login'])
  // })}

  insert(){
    // console.log(this.form.value)
    this.s.sendregisterdetails(this.form.value).subscribe((res)=>{
      // console.log(res)
      this.data=res
      const st=this.data.status
      // console.log(st)
        if(st==201){
          this.msg=this.data.message
          // console.log(this.msg)
          this.form.reset();
        }
        else if(st=="failed"){
          this.msg=this.data.message
          // console.log(this.msg)
        }
    })
  }
}
