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

  ngOnInit(): void {}

  search(form: NgForm) {
    let params: any = {};
    if (form.value.city) {
      params.city = form.value.city;
    }
    if (form.value.event) {
      params.keyword = form.value.event;
    }
    if (form.value.startDateTime) {
      params.startDateTime = form.value.startDateTime;
    }
    if (form.value.endDateTime) {
      params.endDateTime = form.value.endDateTime;
    }
    this.router.navigate(["eventlist"], {
      queryParams: params
    });
  }
}
