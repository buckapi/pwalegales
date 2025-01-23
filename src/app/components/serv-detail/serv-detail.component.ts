import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-serv-detail',
  standalone: true,
  imports: [],
  templateUrl: './serv-detail.component.html',
  styleUrl: './serv-detail.component.css'
})
export class ServDetailComponent {
  constructor (
    public global: GlobalService
  ){}
}
