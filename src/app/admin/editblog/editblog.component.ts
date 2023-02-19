import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  id:any
  blogeditdata:any
  form:any
  editdata:any
data1:any
 editdata1:any

  constructor(private s:AdminServiceService,private a:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id= this.a.snapshot.paramMap.get('id')
    // console.log(this.id)


    this.s.blogview(this.id).subscribe((res)=>{
      // console.log(res)


       //form ke liye
       this.form=new FormGroup({
        title:new FormControl(''),
        description: new FormControl(''),
        image:new FormControl('')
      })



      

//form me data show krne ke liye 
this.editdata=res
this.editdata1=this.editdata.blogview
// console.log(this.editdata1.image.url)
this.form.patchValue({
  title:this.editdata1.title,
  description:this.editdata1.description,
  image:this.editdata1.image.url,


  
}
)
// console.log(this.form.patchValue.image)
  })
  }

  // update(){
  //   this.s.updateblog(this.form.value,this.id).subscribe((res)=>{
  //   console.log(res);
  //   this.router.navigate(['/'])
  // })
  // }

  update(){

    
    const formData = new FormData();
    formData.append('title',this.form.get('title')?.value);
    formData.append('description',this.form.get('description')?.value);
    formData.append('image',this.form.get('image')?.value);
    
    // console.log(this.data.value);
    this.s.updateblog(formData,this.id).subscribe((res)=>{
      // this.form.reset()
      // console.log(res);
      this.data1=res
      const status=this.data1.status
      if(status=="success"){
        this.router.navigate(['admin-display'])
      }
     
      
    });
      }
  onSelectFile(event:any){
    // console.log(event.target.files);
    // this.data2=event.target.files[0]
    // console.log(this.data2)
        if(event.target.files.length>0){
          const file = event.target.files[0];
          this.form.get('image')?.setValue(file)
        }
  }
}
