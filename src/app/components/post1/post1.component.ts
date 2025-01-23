import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { virtualRouter } from '../../services/virtualRouter.service';
@Component({
  selector: 'app-post1',
  standalone: true,
  imports: [],
  templateUrl: './post1.component.html',
  styleUrl: './post1.component.css'
})
export class Post1Component {
  constructor(
    public global: GlobalService,
    public virtualRouter: virtualRouter,
    
  ){}
}
