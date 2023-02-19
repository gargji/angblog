import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
 id:any
 blogviewdata1:any
 blogviewdata:any
  constructor( private s:AdminServiceService,private a: ActivatedRoute) { }

  ngOnInit(): void {

    this.id= this.a.snapshot.paramMap.get('id')
    console.log(this.id)

    this.s.blogview(this.id).subscribe((res)=>{
      // console.log(res)
      this.blogviewdata1=res
      this.blogviewdata=this.blogviewdata1.blogview

    })
  }

}
