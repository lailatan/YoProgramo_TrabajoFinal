import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-redessociales-item',
  templateUrl: './redessociales-item.component.html',
  styleUrls: ['./redessociales-item.component.css']
})
export class RedessocialesItemComponent implements OnInit {
  @Input() miRedSocial: any;

  constructor() { }

  ngOnInit(): void {
  }

}
