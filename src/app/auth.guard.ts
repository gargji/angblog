import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router) {
    
  }
  canActivate(){
    {
     const verify=localStorage.getItem("token")
    if(verify){
      // console.log("first")
        return true
    
    }else{
      window.alert("plzz log in")
      this.router.navigate(['login'],)}
      return false
      
    }
    }
  }
  
// }
