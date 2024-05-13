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
  this.script.load(
    'gmaps',
    'map-helper',
    'creote-extension',
    'jquery-3.6.0',
    'bootstrap',
    'jquery-fancybox',
    'jQuery-style-switcher',
    'jquery-flexslider',
    'color-scheme',
    'owl',
    'swiper',
    'isotope',
    'countdown',
    'simpleParallax',
    'appear',
    'jquery-countTo',
    'sharer',
    'validation'
  )
    .then(() => {
      console.log('Todos los scripts se cargaron correctamente');
    })
    .catch(error => console.log(error));
    // this.epicFunction();
  }
}
