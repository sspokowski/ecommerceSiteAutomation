import { $ } from '@wdio/globals'
import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutModal extends Page {
    /**
     * define selectors using getter methods
     */
    public get btnContinueAsGuest () { return $('#join-neu-continue-as-guest').$('button[type="submit"]') };

}

export default new CheckoutModal();
