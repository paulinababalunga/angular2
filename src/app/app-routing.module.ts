import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventListComponent} from './components/event-list/event-list.component';
import {TableListComponent} from './components/table-list/table-list.component';
import {EventDetailComponent} from './components/event-detail/event-detail.component';
import {CreateEventComponent} from './components/create-event/create-event.component';
import {ErrorsComponent} from './components/errors/errors.component';
import {EventRouteActivatorService} from './services/event-route-activator/event-route-activator.service';
import {EventListResolverService} from './services/events/event-list-resolver.service';
import {CreateSessionComponent} from './components/event-detail/create-session/create-session.component';


const appRoutes: Routes = [
  {
    path: 'events',
    component: EventListComponent,
    resolve: {
      events: EventListResolverService
    }
  },
  {
    path: 'events/new',
    component: CreateEventComponent
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [EventRouteActivatorService]
  },
  {
    path: 'tableList',
    component: TableListComponent
  },
  {
    path: 'session/new',
    component: CreateSessionComponent
  },
  {
    path: '404',
    component: ErrorsComponent
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: 'app/components/user/user.module#UserModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
