import { NgModule } from '@angular/core'

@NgModule({
  imports: [],
  declarations: [],
  exports: []
})

export class PipeModules {
  static forRoot() {
    return {
      ngModule: PipeModules,
      providers: [],
    }
  }
}