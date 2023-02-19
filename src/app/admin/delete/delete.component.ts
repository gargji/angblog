import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
id:any
  constructor(private s:AdminServiceService, private a:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id= this.a.snapshot.paramMap.get('id')
    console.log(this.id)

    this.s.blogdel(this.id).subscribe((res)=>{
      // console.log(res)
      this.router.navigate(['showblogs'],)})
    
  }

}
