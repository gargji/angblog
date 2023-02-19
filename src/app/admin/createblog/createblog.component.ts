import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent implements OnInit {
data:any
data1:any
// data2:any
  constructor( private s:AdminServiceService,private router:Router) { }

  ngOnInit(): void {
    this.data=new FormGroup({
      title:new FormControl(''),
        description: new FormControl(''),
        image:new FormControl('')
    })
  }
  onSelectFile(event:any){
    console.log(event.target.files);
// this.data2=event.target.files[0]
// console.log(this.data2)
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.data.get('image')?.setValue(file)
    }
    
  }
  register(){

    
const formData = new FormData();
formData.append('title',this.data.get('title')?.value);
formData.append('description',this.data.get('description')?.value);
formData.append('image',this.data.get('image')?.value);

// console.log(this.data.value);
this.s.blog_insert(formData).subscribe((res)=>{
  this.data.reset()
  // console.log(res);
  this.data1=res
  const status=this.data1.status
  if(status=="success"){
    this.router.navigate(['admin-display'])
  }
 
  
});
  }

}
