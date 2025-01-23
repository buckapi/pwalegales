import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { ScriptService } from '../../services/script.service';
import { virtualRouter } from '../../services/virtualRouter.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  constructor(
    public global: GlobalService,
    public script: ScriptService,
    public virtualRouter: virtualRouter ,
 ) {
  
  }
}
