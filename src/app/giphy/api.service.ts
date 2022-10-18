import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GIPHY_ACCESS_KEY, GIPHY_ENDPOINT } from '../service/constants';

export interface SearchFilter {
  limit: number;
  offset: number;
  q: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getGiphyItems({ q, limit, offset }: SearchFilter) {
    return this.http.get(
      `${GIPHY_ENDPOINT}${
        q.length != 0 ? 'search' : 'trending'
      }?api_key=${GIPHY_ACCESS_KEY}&q=${q}&limit=${limit}&offset=${offset}&rating=g&lang=en`
    );
  }
}
