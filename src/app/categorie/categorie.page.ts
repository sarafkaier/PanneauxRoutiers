import { Component, OnInit } from '@angular/core';
import { Panneaux } from '../services/model/panneauxModel';
import { PanneauxService } from '../services/panneaux.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {
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
    this.router.navigate(['detailPanneaux'], navigationExtras);
  }

}
