import { Routes } from '@angular/router';
import { FirstComponent } from './core/first/first.component';
import { SecondComponent } from './core/second/second.component';

export const routes: Routes = [
  { path: 'first', component: FirstComponent},
  { path: 'second', component: SecondComponent},
  { path: 'templateSyntaxComponent',
    loadChildren: () => import('./core/template-syntax/template-syntax.routes').then(m => m.TEMPLATE_ROUTES)
  },
];
