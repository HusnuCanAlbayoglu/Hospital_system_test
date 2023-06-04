/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type girisPagePage = typeof import('./pages/girisPage');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, girisPagePage: girisPagePage }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
