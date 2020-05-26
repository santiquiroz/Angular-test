import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/Promotion';
import { PromotionService } from '../services/Promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/Leader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private DishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService) { }

  ngOnInit() {
    this.DishService.getFeaturedDish()
    .then((dish)=>  this.dish = dish);
    this.promotionService.getFeaturedPromotion()
    .then((promotion)=>  this.promotion = promotion);
    this.leaderService.getFeaturedLeader()
    .then((leader)=>  this.leader = leader);
  }

}
