import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  img: string = '';
  @Input('img') set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just Img =>', this.img);
  }
  @Input() alt: string = '';

  @Output() loaded = new EventEmitter<string>();

  imageDefault =
    'https://raw.githubusercontent.com/platzi/angular-componentes/2-step/src/assets/images/default.png';

  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    //before render
    //no async in constructor -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    //before - during render
    //SYNC changes on inputs - many times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    //before render
    //async - fetch - promises, once time.
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('running counter');
    // }, 1000);
  }

  ngAfterViewInit() {
    //after render
    //handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    //delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log on son');
    this.loaded.emit(this.img);
  }
}
