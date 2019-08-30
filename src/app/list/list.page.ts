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
 //  private selectedItem: any;
 /* private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];*/
  // public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private panneauxService: PanneauxService, private router: Router) {
  /*  for (let i = 1; i < 11; i++) { 
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
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
