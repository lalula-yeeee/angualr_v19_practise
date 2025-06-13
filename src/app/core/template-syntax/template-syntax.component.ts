import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CalculatorService } from './service/calculator.service';

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
  private calculatorService = inject(CalculatorService);
  totalCost = this.calculatorService.add(1, 2);
}
