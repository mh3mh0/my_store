import { Component } from '@angular/core';

import { Product } from '../app/models/product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgParent = '';
  // imgParent = 'https://picsum.photos/200';
  showImg = true;

  onLoaded(img: string) {
    console.log('log on father', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
