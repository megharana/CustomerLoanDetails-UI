import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LoanDetailsService {
  configUrl = "assets/config.json";
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
