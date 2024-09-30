import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestdishedComponent } from './restdished/restdished.component';
import { HelpcomponentComponent } from './helpcomponent/helpcomponent.component';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { FavoriteService } from './services/favorite.service';
import { FavoritecompComponent } from './favoritecomp/favoritecomp.component';
import { DisplayComponent } from './display/display.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './services/auth.guard';
import { GuardcompComponent } from './guardcomp/guardcomp.component';
import { RouthGuard } from './routh.guard';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'help',component:HelpcomponentComponent },
  {path:'signup',component:RegistrationComponent },
  {path:'login',component:LoginComponent},
  {path:'order',component:OrderplacedComponent},
  {path:'cart',component:CartComponent,canActivate: [RouthGuard] },
  {path:'favorite',component:FavoritecompComponent,canActivate: [RouthGuard] },
  {path:'display',component:DisplayComponent},
  {path:'guard',component:GuardcompComponent},
  {path:'admin',component:AdminComponent,canActivate: [AuthGuard]},
  {path:'restaurant/:id',component:RestdishedComponent},
 
  
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
