import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyDrop';

  employees = [
    { name: 'Fazt', position: 'manager' },
    { name: 'Fozt', position: 'designer' },
    { name: 'Fezt', position: 'programmer' }
  ];
  model: any = {};
  addEmployee(): void {}
  deleteEmployee(): void {}
  editEmployee(): void {}
  updateEmployee(): void {}
}
