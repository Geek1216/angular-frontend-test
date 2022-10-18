import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() newItemEvent = new EventEmitter<any>();

  onEnterSearch(event: any) {
    this.newItemEvent.emit(event);
  }
}
