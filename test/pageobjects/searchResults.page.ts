import { $, $$ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchResults extends Page {
    /**
     * define selectors using getter methods
     */
    public get firstSearchResult () { return $$('.placeholder-content')[0] };
    public get firstResultAddToCart () { return $$('form.wt-display-inline-block')[0].$('button[type=submit]') };

    public getSearchResultByIndex (index: number) { return $$('.placeholder-content')[index] };
    public getResultAddToCartByIndex (index: number) { return $$('form.wt-display-inline-block')[index].$('button[type=submit]') };
}

export default new SearchResults();
