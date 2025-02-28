import { map, Observable, skip } from 'rxjs';
import { AtmGetRequestInputModel, AtmModel, PagedResult } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments';
import { Injectable } from '@angular/core';

@Injectable()
export class AtmService {
  private apiUrl = environment.apis.default.url;

  constructor(private _httpClient: HttpClient) {}
  getList(input: AtmGetRequestInputModel): Observable<PagedResult<AtmModel>> {
    var rs = this._httpClient.get<AtmModel[]>(`${this.apiUrl}/atmMachines`).pipe(
      map(rs => {
        if (input.name) {
          rs = rs.filter(x => x.name?.toLowerCase().includes(input.name!.trim()));
        }
        if (input.manufacturer) {
          rs = rs.filter(x => x.manufacturer?.toLowerCase().includes(input.manufacturer!.trim()));
        }

        if (input.type) {
          rs = rs.filter(x => x.type?.toLowerCase().includes(input.type!.trim()));
        }

        if (input.serial) {
          rs = rs.filter(x => x.serial?.toLowerCase().includes(input.serial!.trim()));
        }

        return {
          items: rs.slice(input.skipCount, (input.skipCount ?? 0) + (input.maxResultCount ?? 10)),
          totalCount: rs.length,
        } as PagedResult<AtmModel>;
      })
    );

    return rs;
  }

  create(input: AtmModel): Observable<any> {
    return this._httpClient.post(`${this.apiUrl}/atmMachines`, input);
  }

  update(input: AtmModel): Observable<any> {
    return this._httpClient.put(`${this.apiUrl}/atmMachines/${input.id}`, input);
  }

  delete(id: string): Observable<any> {
    return this._httpClient.delete(`${this.apiUrl}/atmMachines/${id}`);
  }

  getById(id: string): Observable<AtmModel> {
    return this._httpClient.get<AtmModel>(`${this.apiUrl}/atmMachines/${id}`);
  }
}
