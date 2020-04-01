import { TestBed, ComponentFixture } from '@angular/core/testing'
import { LoaderComponent } from './loader.component'
import { LoaderService } from '../../services'
import { MaterialModules } from '../../material.modules'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

describe('Test:LoaderComponent', () => {
  let component: LoaderComponent
  // A fixture is a wrapper for a component and it’s template.
  let fixture: ComponentFixture<LoaderComponent>
  let loaderService: LoaderService
  const oldResetTestingModule = TestBed.resetTestingModule

  // This way, it only needs to run configureTestingModule and compileComponents once per spec file.
  // After the testing module is initialised, running TestBed.createComponent() is fairly fast.
  beforeAll(done => (async () => {
    TestBed.resetTestingModule()

    // create a testbed component, it requires all the imports, declarations and providers
    // see the component.html to find the declarations
    // determine the providers from the constructor
    // import all the modules that are imported by the component
    TestBed.configureTestingModule({
      imports: [MaterialModules],
      declarations: [LoaderComponent],
      providers: [LoaderService]
    })
    await TestBed.compileComponents()

    // prevent Angular from resetting testing module
    TestBed.resetTestingModule = () => TestBed
  })().then(done).catch(done.fail))

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent)
    component = fixture.componentInstance
  })

  afterAll(() => {
    // reinstate resetTestingModule method
    TestBed.resetTestingModule = oldResetTestingModule
    TestBed.resetTestingModule()
  })

  it('should have a defined component', () => {
    expect(component).toBeTruthy(true)
  })

  // you retrieve the service and change the service returns
  // the return value should be set for the showLoader key in the component
  it('service asks loader to be shown', () => {
    loaderService = TestBed.get(LoaderService)
    // loader service runs a function that sets the value of showLoader
    loaderService.status = new BehaviorSubject<boolean>(false)

    // detectChanges function should be called inside the test as that will reflect the changes in the service
    fixture.detectChanges()
    expect(component.showLoader).toEqual(false)
  })

  it('executing display fn with a value changes the loader status accordingly', () => {
    let currentLoaderStatus = component.showLoader
    loaderService = TestBed.get(LoaderService)
    let status: boolean = loaderService.status.getValue()
    expect(currentLoaderStatus).toEqual(status)

    // changing the display setting to opposite of currentLoaderStatus
    // here we mock the output of the function display in loaderService
    spyOn(loaderService, 'display').and.callFake(function(arg: boolean) {
      loaderService.status = new BehaviorSubject<boolean>(arg)
    })

    // calling the spied fn
    loaderService.display(!currentLoaderStatus)
    let newStatus: boolean = loaderService.status.getValue()
    expect(status).toEqual(!newStatus)

    fixture.detectChanges()

    expect(component.showLoader).toEqual(!currentLoaderStatus)
  })
})
