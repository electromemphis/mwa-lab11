import { MwaLab10Page } from './app.po';

describe('mwa-lab10 App', () => {
  let page: MwaLab10Page;

  beforeEach(() => {
    page = new MwaLab10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
