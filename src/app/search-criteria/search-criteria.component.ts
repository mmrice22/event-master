import { Component, OnInit } from "@angular/core";
import { TicketmasterService } from "../ticketmaster.service";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private service: TicketmasterService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData("detroit").subscribe(response => {
      console.log(response);
    });
  }
}
