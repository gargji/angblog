import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-registerdisplay',
  templateUrl: './registerdisplay.component.html',
  styleUrls: ['./registerdisplay.component.css']
})
export class RegisterdisplayComponent implements OnInit {
 data1:any
 data2:any
  constructor(private s:AdminServiceService) { }

  ngOnInit(): void {
this.list()

    
  }


  registerdel(data:number){
    console.log(data)
    if(confirm("are you sure to delete")){
     
      this.s.registerdelete(data).subscribe((res)=>{
        console.log(res)
        this.list()
      })
    }
  }
list(){
  this.s.getdata1().subscribe((res)=>{
    this.data1=res
    console.log(res)
    this.data2=this.data1.data
  }
  )
}
}
