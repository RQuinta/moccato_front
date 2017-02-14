import { QuintaPage } from './app.po';

describe('quinta App', function() {
  let page: QuintaPage;

  beforeEach(() => {
    page = new QuintaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
