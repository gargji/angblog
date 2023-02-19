import { Component, NgModule } from '@angular/core';
// import { disableDebugTools } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AboutformComponent } from './aboutform/aboutform.component';
import { ContactviewComponent } from './contactview/contactview.component';
import { CreateblogComponent } from './createblog/createblog.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { DisplaycategoryComponent } from './displaycategory/displaycategory.component';
import { EditblogComponent } from './editblog/editblog.component';
import { RegisterdisplayComponent } from './registerdisplay/registerdisplay.component';
import { RegisterviewComponent } from './registerview/registerview.component';
import { RegistrationComponent } from './registration/registration.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:"admin-dashboard",
    component:DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"admin-createblog",
    component:CreateblogComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"admin-display",
  component:DisplayComponent,
  canActivate:[AuthGuard]

  },{
    path:"admin-editblog",
    component:EditblogComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"blog_view/:id",
    component:ViewComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"admin-displaycategory",
    component:DisplaycategoryComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"admin-createcategory",
    component:CreatecategoryComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"admin-sidebar",
    component:SidebarComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"admin-register",
    component:RegistrationComponent,
  },
  {
    path:"blog_edit/:id",
    component:EditblogComponent
  },
  {
    path:"blog_delete/:id",
     component:DeleteComponent},
  {
    path:"register_edit/:id",
    component:RegisterviewComponent
  },
  {
    path:"admin-registerdisplay",
    component:RegisterdisplayComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"admin-contactshow",
    component:ContactviewComponent,
    canActivate:[AuthGuard]
  },{
    path:"admin-aboutform",
    component:AboutformComponent,
    canActivate:[AuthGuard]
  }
  ,{
    path:"showblogs",
    component:DisplayComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
