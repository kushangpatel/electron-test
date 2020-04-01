import {
  Component,
  NgZone,
  OnInit,
  Output
  } from '@angular/core'

@Component({
  selector: 'sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent implements OnInit {  
  constructor(
    private zone: NgZone,
  ) {
  }

  ngOnInit() {
  }
}
