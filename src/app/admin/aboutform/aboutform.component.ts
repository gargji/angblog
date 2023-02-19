import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-aboutform',
  templateUrl: './aboutform.component.html',
  styleUrls: ['./aboutform.component.css']
})
export class AboutformComponent implements OnInit {
 data:any
//  form1:any

 
  constructor(private s:AdminServiceService) { }

  ngOnInit(): void {
  }
 form1=  new FormGroup({
  text: new FormControl('')
  
  })
  aboutdata(){
    console.log(this.form1.value)
    this.s.aboutform(this.form1.value).subscribe((res)=>{
      
    })
  }
}
