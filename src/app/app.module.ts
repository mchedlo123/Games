import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { GaugeModule } from 'angular-gauge';
import {MatTabsModule} from "@angular/material/tabs";
import { MatSelectModule } from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {HomeComponent} from "./components/home/home.component";
import {MatOptionModule} from "@angular/material/core";
import {HttpHeadersInterceptor} from "./interceptors/http-headers-interceptors";
import {HttpErrorsInterceptors} from "./interceptors/http-errors-interceptors";
import { DetailsComponent } from './components/details/details.component';
import { GameTabsComponent } from './components/game-tabs/game-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    HomeComponent,
    DetailsComponent,
    GameTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptors,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
