import { expect } from '@wdio/globals'
import SignIn from '../../pageobjects/components/signIn.page';
import TopNav from '../../pageobjects/components/topNav.page';
import LandingPage from '../../pageobjects/landing.page';
import SearchResults from '../../pageobjects/searchResults.page';
import ProductDetailPage from '../../pageobjects/productDetailPage.page';
import Cart from '../../pageobjects/cart.page';
import CheckoutModal from '../../pageobjects/components/checkoutModal.page';
import Shipping from '../../pageobjects/shipping.page';

describe('Etsy end-to-end purchase tests', () => {
    it('should be able search for a specific product, view product detail page, and checkout as a guest', async () => {
        await LandingPage.open();
        await TopNav.inputSearch.setValue('Swarovski crystal pearl dragonfly gold brooch');
        await TopNav.btnSearch.click();

        await SearchResults.firstSearchResult.click();
        
        //Product detail pages open in new tab, must wait for the new tab to open and then switch focus
        await browser.pause(2500);
        await browser.switchWindow(/https:\/\/www.etsy.com\/listing\/.*/);
        await expect(ProductDetailPage.btnAddToCart).toExist();
        await ProductDetailPage.btnAddToCart.click();
        await expect(ProductDetailPage.headerAddToCartSuccess).toHaveText('1 item added to cart');

        await Cart.open();
        await Cart.btnCheckout.click();
        
        await CheckoutModal.btnContinueAsGuest.click();
        await Shipping.fillRandomShippingData();
        await browser.scroll(0, 500);
        await Shipping.btnContinueToPayment.click();

        //Payment information would be entered on the next screens, but the test will end here for demonstration purposes.
    }).timeout(180000);

    it.skip('should be able search for a specific product, add to cart from results, and checkout as a guest', async () => {
        await LandingPage.open();

        await TopNav.btnSignIn.click();
        await SignIn.login('sam.spokowski@gmail.com', process.env.PASSWORD);
    });
});

