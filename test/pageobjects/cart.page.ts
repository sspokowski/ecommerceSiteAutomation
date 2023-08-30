import { $,$$ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page  wt-text-title-01
 */
class Cart extends Page {
    public open () {
        return browser.url('/cart');
    }
    /**
     * define selectors using getter methods
     */
    public get btnCheckout () { return $('button.proceed-to-checkout') };
    public get spanSubtotal () { return $('table[summary="This is the order summary, it contains costs for the products you have put in your cart"]').$$('span.currency-value')[2] };
    
    //This is is not ideal, and I would suspect it is prone to breaking when developers make changes
    //I would work with the software team to make sure that these modals are more easily accessible by direct reference
    public async calculateSubTotal (products:string[]) {
        let subtotal = 0;
        for(const element of products) {
            const container = await $(`li[data-listing-id="${element}"]`);
            let value = '';
            let index = 0;
            while(value == '') {
                value = await container.$$('span.currency-value')[index].getText();
                index++;
            };
            
            const numeric: number = +value;
            subtotal += numeric;
        }
        return subtotal;
    }
    
}

export default new Cart();
