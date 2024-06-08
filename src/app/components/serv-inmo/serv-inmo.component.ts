import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-serv-inmo',
  standalone: true,
  imports: [],
  templateUrl: './serv-inmo.component.html',
  styleUrl: './serv-inmo.component.css'
})
export class ServInmoComponent {
constructor (
  public global: GlobalService
){}
}
