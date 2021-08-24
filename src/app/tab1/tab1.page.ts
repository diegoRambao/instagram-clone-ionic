import { analyzeFileForInjectables } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  posts = [
    {
      imgUser: 'https://randomuser.me/api/portraits/men/27.jpg',
      username: 'rodrigues_0215',
      liked: true,
      saved: false,
      location: 'Riga Latvia',
      imgs: ['https://fondosmil.com/fondo/17010.jpg']
    },
    {
      imgUser: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Animal_diversity.png',
      username: 'animal_good',
      liked: false,
      saved: true,
      location: null,
      imgs: ['https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg']
    },
    {
      imgUser: 'https://randomuser.me/api/portraits/women/69.jpg',
      username: 'sofia_1484',
      liked: false,
      saved: true,
      location: 'Riga Latvia',
      imgs: ['https://fondosmil.com/fondo/17010.jpg']
    },
    {
      imgUser: 'https://randomuser.me/api/portraits/lego/1.jpg',
      username: 'lego_oficial',
      liked: true,
      saved: false,
      location: null,
      imgs: ['https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg']
    },
  ];


  opts = {
    slidesPerView: 4.8,
    spaceBetween: 11,
    slidesOffsetBefore: 0
  };

  constructor() {}

}
