import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from "../../restaurants/restaurants.service";
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private service: RestaurantsService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.parent.snapshot.paramMap['id'];
    this.reviews = this.service.reviewOfRestaurant(id);
  }

}
