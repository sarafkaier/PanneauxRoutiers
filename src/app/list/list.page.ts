import { Component, OnInit } from '@angular/core';
import { Panneaux } from '../services/model/panneauxModel';
import { PanneauxService } from '../services/panneaux.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
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
    this.router.navigate(['detail'], navigationExtras);
  }
}
