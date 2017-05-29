import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {EventListComponent} from './components/event-list/event-list.component';
import {EventThumbnailComponent} from './components/event-list/event-thumbnail/event-thumbnail.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NavbarComponent} from './components/navbar/navbar.component';
import {EventsService} from './services/events/events.service';
import {TableListService} from './services/tableData/table-list.service';
import {ToasterModule} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToasterComponent} from './components/shared/toaster/toaster.component';
import {ToasterMessageService} from './components/shared/toaster/services/toaster-message.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    ToasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToasterModule
  ],
  providers: [
    EventsService,
    TableListService,
    ToasterMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
