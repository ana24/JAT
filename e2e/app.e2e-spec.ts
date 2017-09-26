import { Inmobiliaria2Page } from './app.po';

describe('inmobiliaria2 App', () => {
  let page: Inmobiliaria2Page;

  beforeEach(() => {
    page = new Inmobiliaria2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
