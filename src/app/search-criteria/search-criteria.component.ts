import { Component, OnInit } from "@angular/core";
import { TicketmasterService } from "../ticketmaster.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private service: TicketmasterService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData("detroit").subscribe(response => {
      // console.log(response);
    });
  }
  search(form: NgForm) {
    this.router.navigate(["eventlist"], {
      queryParams: { city: form.value.city }
    });
  }
}
