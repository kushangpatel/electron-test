/// <reference types="jasmine" />
import { async, TestBed, ComponentFixture } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

// Load the implementations that should be tested
import { AppComponent } from './app.component'
import { TopBarComponent } from './compoments/top-bar/top-bar.component'
import { FooterComponent } from './compoments/footer/footer.component'
import { MaterialModules } from './material.modules'
import { LoaderService, StoreOperationService } from './services'
import { DateTimeErrorDialogComponent } from './compoments/date-time-error-dialog/date-time-error-dialog.component'

describe(`App`, () => {
  let comp: AppComponent
  // A fixture is a wrapper for a component and it’s template.
  let fixture: ComponentFixture<AppComponent>

  // async beforeEach
  beforeEach(async(() => {

    // create a testbed component, it requires all the imports, declarations and providers
    // see the component.html to find the declarations
    // determine the providers from the constructor
    // import all the modules that are imported by the component
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModules],
      declarations: [AppComponent, TopBarComponent, FooterComponent],
      providers: [StoreOperationService, LoaderService]
    }).compileComponents()
  }))

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    comp = fixture.componentInstance

    fixture.detectChanges() // trigger initial data binding
  })

  it(`component should be created`, () => {
    expect(comp).toBeTruthy(true)
  })

  it('test date time error dialog opens when the system date time is wrong', () => {
    spyOn(comp.dialog, 'open')
    let state = {
      dateTimeError: true
    }

    comp.showDateTimeDialog(state)
    expect(comp.dialog.open).toHaveBeenCalledWith(DateTimeErrorDialogComponent, {})
  })

  it('test date time error dialog does not open when the system date time is correct', () => {
    spyOn(comp.dialog, 'open')
    let state = {
      dateTimeError: false
    }

    comp.showDateTimeDialog(state)
    expect(comp.dialog.open).not.toHaveBeenCalled()
  })

  it('test date time error dialog does not open when any other state changes', () => {
    spyOn(comp.dialog, 'open')
    let state = {
      someValue: 'someValue'
    }

    comp.showDateTimeDialog(state)
    expect(comp.dialog.open).not.toHaveBeenCalled()
  })
})