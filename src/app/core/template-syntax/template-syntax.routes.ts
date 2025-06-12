import { Routes } from '@angular/router';
import { TemplateSyntaxComponent } from './template-syntax.component';
import { ChildComponentComponent } from './component/child-component/child-component.component';
import { ChildPageComponent } from './page/child-page/child-page.component';

export const TEMPLATE_ROUTES: Routes = [
  {
    path: '',
    component: TemplateSyntaxComponent,
    children: [
      { path: 'childComponent', component: ChildComponentComponent}
    ]
  },
  {
    path: 'childPage',
    component: ChildPageComponent
  }
];
