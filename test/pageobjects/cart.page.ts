import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Cart extends Page {
    public open () {
        return browser.url('/cart');
    }
    /**
     * define selectors using getter methods
     */
    public get btnCheckout () { return $('button.proceed-to-checkout') };
    
}

export default new Cart();
