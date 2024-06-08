import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-serv-adu-ext',
  standalone: true,
  imports: [],
  templateUrl: './serv-adu-ext.component.html',
  styleUrl: './serv-adu-ext.component.css'
})
export class ServAduExtComponent {
  constructor (
    public global: GlobalService
  ){}
}
