import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-serv-pro-int',
  standalone: true,
  imports: [],
  templateUrl: './serv-pro-int.component.html',
  styleUrl: './serv-pro-int.component.css'
})
export class ServProIntComponent {
  constructor (
    public global: GlobalService
  ){}
}
