import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
data:any
data1:any
id:any
  constructor( private s:AdminServiceService,private a:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

  this.display()
  
  }
  blogdelete(data:number){
    console.log(data)
    if(confirm("are you sure to delete")){
    // this.id= this.a.snapshot.paramMap.get('id')
    this.s.blogdel(data).subscribe((res)=>{
      console.log(res)
      this.display()
    })}
    

   
    
    }

    display(){
      this.s.getdata().subscribe((res)=>{
        this.data1=res
        console.log(res)
        this.data=this.data1.blogs
  
  
  
      }
      )
    }

}
