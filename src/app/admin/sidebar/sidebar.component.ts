import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private s:AdminServiceService,private router:Router) { }

  ngOnInit(): void {
   
  }
  logout(){
    
    localStorage.removeItem('token');
    this.s.logout().subscribe((res)=>{
      console.log(res)
      this.router.navigate(['login'])
    })
    // window.location.reload();
    
    
  }

}
