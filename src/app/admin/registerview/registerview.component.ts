import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-registerview',
  templateUrl: './registerview.component.html',
  styleUrls: ['./registerview.component.css']
})
export class RegisterviewComponent implements OnInit {
  data:any
  form:any
  msg:any
  id:any
  editdata:any
  editdata1:any
  constructor(private s:AdminServiceService,private a:ActivatedRoute,private r:Router) { }

  ngOnInit(): void {
    this.id= this.a.snapshot.paramMap.get('id')
    console.log(this.id)

    this.s.showuserview(this.id).subscribe((res)=>{
      console.log(res)


       //form ke liye
   



      

//form me data show krne ke liye 
this.editdata=res
this.editdata1=this.editdata.data
// console.log(this.editdata1.image.url)
this.form.patchValue({
  name:this.editdata1.name,
  email:this.editdata1.email,
  // image:this.editdata1.image.url,


  
}
)
// console.log(this.form.patchValue.image)
  })
  this.form=new FormGroup({
    name:new FormControl(''),
    email: new FormControl(''),
    // image:new FormControl('')
  })
}
  //   this.form = new FormGroup({
  //     name: new FormControl(''),
  //     email: new FormControl(''),
  //     password: new FormControl(''),
  //     confirmpassword: new FormControl('')
  //   })
  // }

  insert(){
    console.log(this.form.value)
    this.s.userupdate(this.form.value,this.id).subscribe((res)=>{
      // this.form.reset()
      console.log(res)
      this.r.navigate(['admin-registerdisplay'])
  })
  }
}
