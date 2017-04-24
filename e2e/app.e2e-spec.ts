import { NaturalCyclesPage } from './app.po';

describe('natural-cycles App', () => {
  let page: NaturalCyclesPage;

  beforeEach(() => {
    page = new NaturalCyclesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
