import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PanneauxService } from '../services/panneaux.service';

@Component({
  selector: 'app-detail',
  templateUrl: './details-categories.page.html',
  styleUrls: ['./details-categories.page.scss'],
})
export class DetailsCategoriesPage implements OnInit {

  item;

  constructor(private route: ActivatedRoute, private router: Router, private panneauxService: PanneauxService) {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        // this.item = JSON.parse(params.item);
        this.item = this.panneauxService.get(params.id);
      }
    });
     }



  ngOnInit() {
  }

}
