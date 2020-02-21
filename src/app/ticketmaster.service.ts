import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TicketmasterService {
  apiKey: string = "hKZPfVjGljI71w2BXGFOnqJX296h5pVR";
  apiUrl: string = "https://app.ticketmaster.com/discovery/v2/events.json?";
  constructor(private http: HttpClient) {}

  // methods
  getData(searchWord: string = "") {
    return this.http.get(this.apiUrl, {
      params: { apikey: this.apiKey, keyword: searchWord }
    });
  }
}
