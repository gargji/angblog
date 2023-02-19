import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  data:any
  blogs:any
  data1:any
  constructor(private s:AdminServiceService) { }

  ngOnInit(): void {
    this.s.getdata().subscribe((res)=>{
      console.log(res)
      this.data=res
      this.data1=this.data.blogs
      console.log(this.data1)
      
  }
    )
}
}