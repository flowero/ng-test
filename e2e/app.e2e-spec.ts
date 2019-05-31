import { JustForTestPage } from './app.po';

describe('just-for-test App', function() {
  let page: JustForTestPage;

  beforeEach(() => {
    page = new JustForTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
