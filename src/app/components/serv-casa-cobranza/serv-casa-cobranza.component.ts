import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-serv-casa-cobranza',
  standalone: true,
  imports: [],
  templateUrl: './serv-casa-cobranza.component.html',
  styleUrl: './serv-casa-cobranza.component.css'
})
export class ServCasaCobranzaComponent {
constructor(
 public global: GlobalService,
) { }
}
