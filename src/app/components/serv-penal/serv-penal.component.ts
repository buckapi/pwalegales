import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-serv-penal',
  standalone: true,
  imports: [],
  templateUrl: './serv-penal.component.html',
  styleUrl: './serv-penal.component.css'
})
export class ServPenalComponent {
  constructor (
    public global: GlobalService
  ){}
}
