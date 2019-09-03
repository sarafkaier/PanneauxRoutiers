import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PanneauxService } from '../services/panneaux.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

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

