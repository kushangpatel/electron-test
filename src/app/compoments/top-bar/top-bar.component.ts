import { Component, OnInit } from '@angular/core'
import { ROUTE_HOME, ROUTE_VIEW_THREE, ROUTE_VIEW_TWO } from '../../app.routes'

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit {
  public homeUrl = ROUTE_HOME
  public viewTwoUrl = ROUTE_VIEW_TWO
  public viewThreeUrl = ROUTE_VIEW_THREE

  constructor() { }

  ngOnInit() {
  }

  onCloseClick() {
  }

  onMinimizeClick() {
  }
}
