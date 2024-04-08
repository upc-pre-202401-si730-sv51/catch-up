import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpClientModule} from "@angular/common/http";
import { ArticleListComponent } from './news/components/article-list/article-list.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {NgOptimizedImage} from "@angular/common";
import {MatMenuModule} from "@angular/material/menu";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {LayoutModule} from "@angular/cdk/layout";
import {NewsApiService} from "./news/services/news-api.service";
import {LogoApiService} from "./shared/services/logo-api.service";

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgOptimizedImage
  ],
  providers: [
    provideAnimationsAsync(),
    LogoApiService, NewsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
