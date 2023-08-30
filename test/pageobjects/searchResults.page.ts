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
    
}

export default new SearchResults();
