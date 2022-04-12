import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import { Portfolio } from '../objetos/portfolio';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:5001/portfolio'

  constructor(private http: HttpClient) { }

  getPortfolio(): Observable<Portfolio> {
    return this.http.get<Portfolio>(this.apiUrl)
  }
}
