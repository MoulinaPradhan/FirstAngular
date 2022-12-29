import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TagsComponent } from './tags/tags.component';
import { HttpClientModule } from '@angular/common/http';
import { EventComponent } from './event/event.component';
import { RouterModule,Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination'; 

const routes: Routes=[
  {
    path : 'events/:event_category',
     component: EventComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TagsComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
