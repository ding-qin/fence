import { YytPage } from './app.po';

describe('yyt App', () => {
  let page: YytPage;

  beforeEach(() => {
    page = new YytPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
