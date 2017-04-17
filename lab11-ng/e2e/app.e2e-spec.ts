import { Lab11NgPage } from './app.po';

describe('lab11-ng App', () => {
  let page: Lab11NgPage;

  beforeEach(() => {
    page = new Lab11NgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
