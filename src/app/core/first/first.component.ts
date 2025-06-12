import { Component, signal } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.less'
})
export class FirstComponent {
  firstName = signal('Morgan');
  age = signal(20);
  updateCount = signal(0);

  lastName = '1234';
  birthday: Date = new Date();

  setFirstName() {
    this.firstName.set('Jason');
    this.setUpdateCount();
  }

  computeAge() {
    const date = new Date(this.birthday);
    this.age.set( this.calculateAge(date) );
    this.setUpdateCount();
  }

  calculateAge(birthDate: Date): number {
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasBirthdayPassedThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassedThisYear) {
      age--;
    }

    return age;
  }

  setUpdateCount() {
    this.updateCount.set(this.updateCount() + 1);
  }
}
