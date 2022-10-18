import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  giphyItems: any[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  length = 0;
  pageSize = 9;
  offset = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  searchText: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getGiphyItems();
  }
  getGiphyItems(): void {
    this.apiService
      .getGiphyItems({
        q: this.searchText,
        limit: this.pageSize,
        offset: this.offset,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe((giphyItems: any) => {
        this.length = giphyItems.pagination.total_count;
        this.giphyItems = giphyItems.data;
      });
  }

  // getGiphyItemsBySearch(): void {
  //   this.apiService
  //     .getGiphyItemsBySearch({
  //       q: this.searchText,
  //       limit: this.pageSize,
  //       offset: this.offset,
  //     })
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe((giphyItems: any) => {
  //       this.length = giphyItems.pagination.total_count;
  //       this.giphyItems = giphyItems.data;
  //     });
  // }
  onEnterSearch = (event: any): void => {
    console.log('S-s->>>>>>>>>>>', event.target.value);
    this.searchText = event.target.value;
    this.getGiphyItems();
    //callback code here
  };

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
  getPageEvent(event: any) {
    console.log('S-s-s>>>>>>>getPageEvent>>>>>>>>', event);
    this.pageSize = event.pageSize;
    this.offset = event.pageIndex * event.pageSize;
    this.getGiphyItems();
    // this.length=
  }
}
