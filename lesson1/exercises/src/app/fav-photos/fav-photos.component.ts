import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'The X-Files';
  image3 = 'https://64.media.tumblr.com/a8f10ea438358521ce5fa0ca2c460860/tumblr_inline_p8lkovt2g51taasjf_540.jpg';
  image2 = 'https://www.throwbacks.com/content/images/2018/02/7e7e78cafb18a5bc04c8e9adbae4afd0.jpg';
  image1 = 'https://cdn.vox-cdn.com/thumbor/aL1DzIHIESzz70hNydS6njobhBc=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/3686188/dirt-dave-and-gill.0.jpg';

  constructor() { }

  ngOnInit() {
  }

}