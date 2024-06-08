import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-serv-civil',
  standalone: true,
  imports: [],
  templateUrl: './serv-civil.component.html',
  styleUrl: './serv-civil.component.css'
})
export class ServCivilComponent {
  constructor (
    public global: GlobalService
  ){}
}
