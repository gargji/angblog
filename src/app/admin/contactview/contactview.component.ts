import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-contactview',
  templateUrl: './contactview.component.html',
  styleUrls: ['./contactview.component.css']
})
export class ContactviewComponent implements OnInit {
data2:any
data1:any
  constructor(private s:AdminServiceService) { }

  ngOnInit(): void {
   this.list()
  }
  condelete(data:number) {
    console.log(data)
  if(confirm("are you sure to delete")){
   
    this.s.contactdelete(data).subscribe((res)=>{
      console.log(res)
      this.list()
    })
  }
  }

  list(){
    this.s.condatashow().subscribe((res)=>{
      this.data2=res
      console.log(this.data2)
      this.data1=this.data2.data
    }
    )
  }
}
