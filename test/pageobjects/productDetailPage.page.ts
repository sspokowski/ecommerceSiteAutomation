import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductDetailPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get btnAddToCart () { return $('div[data-selector="add-to-cart-button"]').$('button[type="submit"]') };
    public get headerAddToCartSuccess () { return $('h3[data-selector="post-atc-overlay-heading"]') };
    
}

export default new ProductDetailPage();
