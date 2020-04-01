import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Injectable } from '@angular/core'

@Injectable()
export class LoaderService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  /**
   * @param  {boolean} [value=true|false]
   */
  display(value: boolean) {
    this.status.next(value)
  }
}