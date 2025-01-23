import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-serv-emp',
  standalone: true,
  imports: [],
  templateUrl: './serv-emp.component.html',
  styleUrl: './serv-emp.component.css'
})
export class ServEmpComponent {
  constructor (
    public global: GlobalService
  ){}
}
