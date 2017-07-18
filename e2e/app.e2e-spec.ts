import { AngularPolymerPage } from './app.po';

describe('angular-polymer App', () => {
  let page: AngularPolymerPage;

  beforeEach(() => {
    page = new AngularPolymerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
