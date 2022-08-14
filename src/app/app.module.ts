import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoinDetailsComponent } from './components/coin-details/coin-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    CoinDetailsComponent,
  ],
  imports: [BrowserModule,BrowserAnimationsModule, AppRoutingModule, NgxPaginationModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
