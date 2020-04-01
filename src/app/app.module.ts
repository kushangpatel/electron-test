import { APP_BASE_HREF } from '@angular/common'
import { APP_RESOLVER_PROVIDERS } from './app.resolver'
import { AppComponent } from './app.component'
import { ApplicationRef, NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { ENV_PROVIDERS } from './environment'
import { FooterComponent } from './compoments/footer/footer.component'
import { FormsModule } from '@angular/forms'
import { HomeComponent } from './compoments/home/home.component'
import { HttpModule } from '@angular/http'
import { LoaderComponent } from './compoments/loader/loader.component'
import { MaterialModules } from './material.modules'
import { NoContentComponent } from './no-content'
import { PipeModules } from './pipe.modules'
import { PreloadAllModules, RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { ROUTES } from './app.routes'
import { SideBarComponent } from './compoments/side-bar/side-bar.component'
import { SideBarRightComponent } from './compoments/side-bar-right/side-bar-right.component'
import { TopBarComponent } from './compoments/top-bar/top-bar.component'
import { ViewThreeComponent } from './compoments/view-three/view-three.component'
import { ViewTwoComponent } from './compoments/view-two/view-two.component'
import '../styles/styles.scss'
import '../styles/headings.css'

declare const ENV: string

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  { provide: APP_BASE_HREF, useValue: '/' }
]

interface InternalStateType {
  [key: string]: any
}

interface StoreType {
  state: InternalStateType
  rootState: InternalStateType
  restoreInputValues: () => void
  disposeOldHosts: () => void
}

let CONDITIONAL_IMPORTS = []

if (ENV === 'development') {
  console.log('loading react devtools')
  // AoT won't allow metaReducers, so we need to add them conditionally
  // this should override the previous StoreModule declaration
  // CONDITIONAL_IMPORTS.push(StoreModule.forRoot(reducers, { metaReducers }));
  // // Now connecting to DevModule.
  // CONDITIONAL_IMPORTS.push(StoreDevtoolsModule.instrument());
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NoContentComponent,
    TopBarComponent,
    LoaderComponent,
    HomeComponent,
    SideBarComponent,
    SideBarRightComponent,
    ViewTwoComponent,
    ViewThreeComponent,
    FooterComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModules,
    PipeModules.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    ...CONDITIONAL_IMPORTS
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef
  ) {
  }
}
