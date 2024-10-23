import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Apprendre Angular',
    component: HomeComponent,
  },
  {
    path: 'reactive-forms',
    title: 'Reactive Forms',
    component: ReactiveFormsComponent,
  },
];
