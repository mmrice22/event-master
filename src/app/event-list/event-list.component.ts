import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TicketmasterService } from "../ticketmaster.service";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  events: any;
  showIndex: number;
  constructor(
    private route: ActivatedRoute,
    private service: TicketmasterService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      console.log(response);
      this.service.getData(response).subscribe(data => {
        this.events = data["_embedded"].events;
        console.log(data["_embedded"].events);
      });
    });
  }

  addToFavorites(favorite: any) {
    this.service.addToFavorites(favorite);
    // console.log(favorite);
  }

  showMore(index: number) {
    this.showIndex = index;
  }
}
