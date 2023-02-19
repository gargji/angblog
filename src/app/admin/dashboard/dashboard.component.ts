import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
data:any
data1:any
data2:any
  constructor(private s:AdminServiceService) { }

  ngOnInit(): void {


  //   this.data=this.s.getmsg()
  // console.log(this.data)
  // this.data1=this.data.user
  // // this.data1=this.data[0].Name
  // console.log(this.data1)
 const jwt=localStorage.getItem("token")
 console.log(jwt)



// to get user data with jwt
this.s.userdata({"token":jwt}).subscribe((res)=>{
  console.log(res)
  this.data=res
  this.data1=this.data.data.name
  console.log(this.data)
  console.log(this.data1)
})


  }

}
