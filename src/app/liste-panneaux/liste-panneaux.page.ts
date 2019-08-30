import { Component, OnInit } from '@angular/core';
import { Panneaux } from '../services/model/panneauxModel';
import { Router, NavigationExtras } from '@angular/router';
import { PanneauxService } from '../services/panneaux.service';

@Component({
  selector: 'app-liste-panneaux',
  templateUrl: './liste-panneaux.page.html',
  styleUrls: ['./liste-panneaux.page.scss'],
})
export class ListePanneauxPage implements OnInit {
  listePanneaux: Panneaux[] = null;


  constructor(private panneauxService: PanneauxService, private router: Router) {
    this.getPanneaux();
  }

  ngOnInit() {
  }
  getPanneaux() {
    this.listePanneaux = this.panneauxService.getAll();
  }

  onClickItem(itemId) {
    const navigationExtras: NavigationExtras = {
      queryParams: { id: itemId }
    };
    this.router.navigate([' '], navigationExtras);
  }

}
