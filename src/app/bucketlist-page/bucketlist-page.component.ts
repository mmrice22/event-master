import { Component, OnInit } from "@angular/core";
import { TicketmasterService } from "../ticketmaster.service";

@Component({
  selector: "app-bucketlist-page",
  templateUrl: "./bucketlist-page.component.html",
  styleUrls: ["./bucketlist-page.component.css"]
})
export class BucketlistPageComponent implements OnInit {
  favorites: any[] = [];
  constructor(private service: TicketmasterService) {}

  ngOnInit(): void {
    this.favorites = this.service.getFavorites();
  }

  deleteFavorite(index: number) {
    this.service.deleteFavorite(index);
  }
}
