import {
  Component,
  NgZone,
  OnInit,
  Output
  } from '@angular/core'

@Component({
  selector: 'sidebar-right',
  templateUrl: './side-bar-right.component.html',
  styleUrls: ['./side-bar-right.component.scss']
})

export class SideBarRightComponent implements OnInit {
  constructor(
    private zone: NgZone,
  ) {
  }

  ngOnInit() {
  }
}
