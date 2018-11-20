import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RegistreComponent } from './components/admin/registre/registre.component';
import { Login1Component } from './components/admin/login/login.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UpdateComponent } from './components/admin/update/update.component';
import { FirstPageComponent } from './components/game/first-page/first-page.component';
import { OperationComponent } from './components/game/operation/operation.component';
import { AdditionComponent } from './components/game/addition/addition.component';
import { SubstitionComponent } from './components/game/substition/substition.component';
import { MultiplicationComponent } from './components/game/multiplication/multiplication.component';
import { DivisionComponent } from './components/game/division/division.component';
import { ContainerComponent } from './components/game/container/container.component';
import { ProfileComponent } from './components/game/profile/profile.component';
import { AddDiffComponent } from './components/game/add-diff/add-diff.component';
import { SubDiffComponent } from './components/game/sub-diff/sub-diff.component';
import { MultDiffComponent } from './components/game/mult-diff/mult-diff.component';
import { DivDiffComponent } from './components/game/div-diff/div-diff.component';
import { AddhardComponent } from './components/game/addhard/addhard.component';
import { SubhardComponent } from './components/game/subhard/subhard.component';
import { MulthardComponent } from './components/game/multhard/multhard.component';
import { DivhardComponent } from './components/game/divhard/divhard.component';
import { HowplayComponent } from './components/howplay/howplay.component';

const router:Routes = [
  { path:'',component:LoginComponent },
  { path : 'login',component:LoginComponent },
  { path:'admin',component:Login1Component },
  { path:'game/:id/howplay',component:HowplayComponent },
  { path:'admin/dashboard/adduser',component:RegistreComponent },
  { path:'admin/dashboard/update/:id',component:UpdateComponent },
  { path:'admin/dashboard',component:DashboardComponent },
  { path:'game/:id',component:FirstPageComponent },
  { path:'opertaions/:id',component:OperationComponent },
  { path:'opertaions/:id/adddif',component:AddDiffComponent },
  { path:'opertaions/:id/subdif',component:SubDiffComponent },
  { path:'opertaions/:id/multdif',component:MultDiffComponent },
  { path:'opertaions/:id/divdif',component:DivDiffComponent },
  { path:'opertaions/:id/adddif/add',component:AdditionComponent },
  { path:'opertaions/:id/subdif/sub',component:SubstitionComponent },
  { path:'opertaions/:id/multdif/mult',component:MultiplicationComponent },
  { path:'opertaions/:id/divdif/div',component:DivisionComponent },
  { path:'opertaions/:id/adddif/addh',component:AddhardComponent },
  { path:'opertaions/:id/subdif/subh',component:SubhardComponent },
  { path:'opertaions/:id/multdif/multh',component:MulthardComponent },
  { path:'opertaions/:id/divdif/divh',component:DivhardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistreComponent,
    LoginComponent,
    DashboardComponent,
    UpdateComponent,
    FirstPageComponent,
    OperationComponent,
    AdditionComponent,
    SubstitionComponent,
    MultiplicationComponent,
    DivisionComponent,
    ContainerComponent,
    ProfileComponent,
    AddDiffComponent,
    SubDiffComponent,
    MultDiffComponent,
    DivDiffComponent,
    AddhardComponent,
    SubhardComponent,
    MulthardComponent,
    DivhardComponent,
    Login1Component,
    HowplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(router),
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
