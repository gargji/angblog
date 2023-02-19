import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateblogComponent } from './createblog/createblog.component';
import { CreatecategoryComponent } from './createcategory/createcategory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { DisplaycategoryComponent } from './displaycategory/displaycategory.component';
import { EditblogComponent } from './editblog/editblog.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewComponent } from './view/view.component';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterdisplayComponent } from './registerdisplay/registerdisplay.component';
import { RegisterviewComponent } from './registerview/registerview.component';
import { ContactviewComponent } from './contactview/contactview.component';
import { AboutformComponent } from './aboutform/aboutform.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    CreateblogComponent,
    CreatecategoryComponent,
    DashboardComponent,
    DisplayComponent,
    DisplaycategoryComponent,
    EditblogComponent,
    SidebarComponent,
    ViewComponent,
    RegistrationComponent,
    RegisterdisplayComponent,
    RegisterviewComponent,
    ContactviewComponent,
    AboutformComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
     ReactiveFormsModule,
    FormsModule,
  
    AdminRoutingModule
  ],
//  exports:[
//   DashboardComponent
//  ]
  
})
export class AdminModule { }
