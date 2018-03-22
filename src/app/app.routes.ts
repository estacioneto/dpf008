import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CalendarComponent} from './calendar/calendar.component';

export const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'calendario', component: CalendarComponent},
  {path: '**', redirectTo: ''}
];
