import { Component, OnInit } from '@angular/core'
import { LoaderService } from '../../services'

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit {
  public color: string
  public mode: string
  public value: number
  public diameter: number
  public strokeWidth: number
  public showLoader: boolean = false

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.color = 'primary'
    this.mode = 'indeterminate'
    this.value = 20
    this.diameter = 50
    this.strokeWidth = 5
    this.subscribeLoaderChange()
  }

  subscribeLoaderChange() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val
    })
  }
}
