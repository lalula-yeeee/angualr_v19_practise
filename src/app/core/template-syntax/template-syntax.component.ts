import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-template-syntax',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './template-syntax.component.html',
  styleUrl: './template-syntax.component.less'
})
export class TemplateSyntaxComponent {

}
