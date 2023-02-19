import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
data:any;
data1:any




  constructor(private s:AdminServiceService ,private router:Router) { }
  form1:any= new FormGroup({

    name : new FormControl(''),
    email : new FormControl(''),
    phone :new FormControl(''),
    message: new FormControl('')
  
  })
  ngOnInit(): void {


  }
contactdata(){
  // console.log(this.form1.value)
  this.s.coninsert(this.form1.value).subscribe((res)=>{
  // this.router.navigate(['/'])
  // console.log(res)
  this.data=res
  this.data1=this.data.message
  this.form1.reset();
  // console.log(this.data1)
  })

 
  // this.router.navigate(['/'])


  
}
}
