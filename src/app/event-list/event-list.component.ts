import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
// import { Route } from "@angular/compiler/src/core";
import { TicketmasterService } from "../ticketmaster.service";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  events: any;
  constructor(
    private route: ActivatedRoute,
    private service: TicketmasterService // private router: Route
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(response => {
      console.log(response.city);
      this.service.getData(response.city).subscribe(data => {
        this.events = data["_embedded"].events;
        console.log(data["_embedded"].events);
      });
    });
  }
}
