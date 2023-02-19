import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  id:any
data:any
blogs:any
data1:any
  constructor( private s:AdminServiceService) { }

  ngOnInit(): void {

    this.s.getdata().subscribe((res)=>{
      console.log(res)
      this.data=res
      this.data1=this.data.blogs
      console.log(this.data1)
      //  this.id=    this.data1._id
      //  console.log(this.id)
      // this.data1.sort({id:-1})
      
    
      // console.log(this.data)
      

    })
  }

}
