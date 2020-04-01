export default class Constants {
  // scopes constants
  static SCOPE_MAIN = 'main'
  static SCOPE_RENDERER = 'renderer'

  static OS_ARCH = {
    x64: 'x64',
    ia32: 'ia32'
  }

  // date format for angular
  static readonly DATE_FMT = 'MMM d, y' // Feb 3, 2018
  static readonly DATE_TIME_FMT = `${Constants.DATE_FMT} hh:mm:ss a`
}