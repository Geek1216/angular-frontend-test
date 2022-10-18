import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'giphy-image-item',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('giphyItems') giphyItems: any = [];
}
