import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-cadastrar-cargo',
  templateUrl: './cadastrar-cargo.component.html',
  styleUrls: ['./cadastrar-cargo.component.scss']
})
export class CadastrarCargoComponent {
  selectedValue!: string;
  selectedCar!: string;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

}
