import _ from 'lodash'
import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { shell } from 'electron'

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  public name = 'Electron Test'

  constructor() {
  }

  public ngOnInit() {
  }

  public openURL(url) {
    shell.openExternal(url)
  }
}