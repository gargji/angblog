import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  // url ="http://localhost:3000/api/"
  url="https://blog-bkg2.onrender.com/api/"


  msg:any
 
  setmsg(data:any){
    console.log(data)
    this.msg=data
  }
  getmsg(){
    return this.msg
  } 

  constructor( private http :HttpClient) { }
  // data show 
 getdata(){
  return this.http.get(this.url+'blogs')
 }

 userdata(data:any){
  console.log(data.token)
  const headers = new HttpHeaders().set("token",`Bearer ${localStorage.getItem("token")}`);
  return this.http.post(this.url + 'profile',{},{headers});
 }

 blog_insert(data:any){
  console.log(data)
  return this.http.post(this.url +'bloginsert',data)
 }
 
 blogview(id:any){
  return this.http.get(this.url+"blogview/"+id)

 }
 updateblog(data:any,id:any){
  console.log(data,id)
  return this.http.put(this.url+"blogupdate/"+id,data)
 }
 showuserview(id:any){
  return this.http.get(this.url+"showuserview/"+id)

 }
 userupdate(data:any,id:any){
  return this.http.put(this.url+"userupdate/"+id,data)
 }
//  insert(data:any){
//   return this.http.post(this.url2,data)
//  }



// register ke liye insert
 sendregisterdetails(details: any) {
  // console.log(details);
  return this.http.post(this.url + 'register', details);
}
// data show register ke liye
getdata1(){
  return this.http.get(this.url+'showusers')
 }
 blogdel(id:any){
  return this.http.get(this.url+"blog_delete/"+id)
 }

//  contact ke liye insert
coninsert(details:any){
  console.log(details)
  return this.http.post(this.url +'contactinsert',details)

}

condatashow(){
  // const token=localStorage.getItem("token")
  // console.log(token)
  const headers = new HttpHeaders().set("token",`Bearer ${localStorage.getItem("token")}`);
  return this.http.get(this.url+'contact',{headers})
}
contactdelete(data:number){
  return this.http.get(this.url+'contactdelete/'+data)
}
registerdelete(data:number){
  return this.http.get(this.url+'registerdelete/'+data)
}
// about

aboutform(details:any){
  console.log(details)
  return this.http.post(this.url +'about',details)

}
aboutshow(){
  return this.http.get(this.url +'about')
}

admin_login(data:any){
  console.log(data)
  return this.http.post<any>(this.url+"verify_login",data)
}
logout(){
  return this.http.get(this.url +'logout')
}
// user_register(data:any){
//   return this.http.post<any>(this.url+"register",data)

// }

}


// json ki api api ke liye 
// json server github
// npm install -g json-server
// json-server --watch db.json