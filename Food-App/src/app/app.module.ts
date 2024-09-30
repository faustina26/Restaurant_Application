import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatButtonModule} from '@angular/material/button'
import{MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInput} from '@angular/material/input'
import{MatCardModule} from '@angular/material/card';
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import{MatChipsModule} from '@angular/material/chips'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatLabel } from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { ItemsComponent } from './items/items.component';
import { RestdishedComponent } from './restdished/restdished.component';
import { HeaderComponent } from './header/header.component';
import {MatSelectModule} from '@angular/material/select';
import { HelpcomponentComponent } from './helpcomponent/helpcomponent.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CartComponent } from './cart/cart.component';
import { customInterceptor } from './custom.interceptor';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { FavoritecompComponent } from './favoritecomp/favoritecomp.component';
import { DisplayComponent } from './display/display.component';
import { AdminComponent } from './admin/admin.component';
import {MatTreeModule} from '@angular/material/tree';
import { GuardcompComponent } from './guardcomp/guardcomp.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ItemsComponent,
    RestdishedComponent,
    HeaderComponent,
    HelpcomponentComponent,
    RegistrationComponent,
    LoginComponent,
    CartComponent,
    FavoritecompComponent,
    DisplayComponent,
    AdminComponent,
    GuardcompComponent,
    OrderplacedComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInput,
    MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatLabel,
    ReactiveFormsModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatTabsModule,
    MatTreeModule
  ],
  providers: [
    provideHttpClient(withInterceptors([customInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
