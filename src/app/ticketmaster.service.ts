import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TicketmasterService {
  apiKey: string = "hKZPfVjGljI71w2BXGFOnqJX296h5pVR";
  apiUrl: string = "https://app.ticketmaster.com/discovery/v2/events.json?";
  favorites: any[] = [];
  constructor(private http: HttpClient) {}

  // methods
  getData(queryParams: any) {
    let params: any = {
      apikey: this.apiKey
    };
    if (queryParams.city) {
      params.city = queryParams.city;
    }
    if (queryParams.keyword) {
      params.keyword = queryParams.keyword;
    }
    return this.http.get(this.apiUrl, {
      params: params
    });
  }

  addToFavorites(favorite: any) {
    this.favorites.push(favorite);
  }

  getFavorites() {
    return this.favorites;
  }

  deleteFavorite(favorite: number) {
    this.favorites.splice(favorite, 1);
  }
}
