import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin/admin-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
data:any
  constructor(private s: AdminServiceService) { }

  ngOnInit(): void {
    this.s.aboutshow().subscribe((res)=>{
      console.log(res)
      this.data=res
    })
    
  
    
  }

}
