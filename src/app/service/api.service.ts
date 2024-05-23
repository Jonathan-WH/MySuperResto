import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface APIResponse {
  title: string;
  data: any[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _httpClient: HttpClient) {}

  async getData() {
    // make request http
    const req = this._httpClient.get<APIResponse>('assets/data.json');

    // extract data with RxJs library operator
    const value = firstValueFrom(req);
    // now we return data ready
    return value;
  }
}
