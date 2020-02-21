import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BucketlistPageComponent } from "./bucketlist-page/bucketlist-page.component";
import { EventListComponent } from "./event-list/event-list.component";
import { SearchCriteriaComponent } from "./search-criteria/search-criteria.component";

const routes: Routes = [
  { path: "bucketlist", component: BucketlistPageComponent },
  { path: "eventlist", component: EventListComponent },
  { path: "search", component: SearchCriteriaComponent },
  { path: "", redirectTo: "/search", pathMatch: "full" },
  { path: "**", redirectTo: "/search", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
