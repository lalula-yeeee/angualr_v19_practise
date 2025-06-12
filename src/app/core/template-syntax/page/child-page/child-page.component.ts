import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-child-page',
  imports: [
    RouterLink
  ],
  templateUrl: './child-page.component.html',
  styleUrl: './child-page.component.less'
})
export class ChildPageComponent {

}
