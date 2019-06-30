import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TvComponent } from './tv/tv.component';
import { LaptopComponent } from './laptop/laptop.component';
import { PhoneComponent } from './phone/phone.component';
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TvComponent,
    LaptopComponent,
    PhoneComponent,
    
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'link1', component: TvComponent},
      { path: 'link2', component: LaptopComponent},
      { path: 'link3', component:PhoneComponent}
    ])
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
