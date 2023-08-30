import { $ } from '@wdio/globals'
import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TopNav extends Page {
    /**
     * define selectors using getter methods
     */
    public get btnSignIn () { return $('button.signin-header-action') };

    public get inputSearch () { return $('input[data-id="search-query"]') };

    public get btnSearch () { return $('button[type="submit"]') };

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async searchByTerm (term: string) {
        await this.inputSearch.setValue(term);
        await this.btnSearch.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new TopNav();
