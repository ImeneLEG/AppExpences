import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './maintenance/maintenance.component';
import { MonthlyTransactions } from './view-data/view-data.component';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Utiliser des chemins relatifs au lieu d'URL absolues
  private upsertUrl: string = '/api/Transaction/Upsert';
  private getAllUrl: string = '/api/Transaction/GetAll';
  private deleteUrl: string = '/api/Transaction/Delete/';
  private getMonthlyTransactionsUrl: string = '/api/Transaction/GetMonthlyTransactions';

  constructor(private http: HttpClient) {}

  upsertTransaction(transaction: Transaction) {
    return this.http.post<Transaction>(this.upsertUrl, transaction);
  }

  getAllTransactions() {
    return this.http.get<Transaction[]>(this.getAllUrl);
  }

  deleteTransaction(id: number) {
    return this.http.delete(`${this.deleteUrl}${id}`, {
      responseType: 'text',
    });
  }

  getMonthlyTransactions() {
    return this.http.get<MonthlyTransactions[]>(this.getMonthlyTransactionsUrl);
  }
}
