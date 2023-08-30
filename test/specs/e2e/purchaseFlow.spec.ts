import { browser, expect } from '@wdio/globals';
import TopNav from '../../pageobjects/components/topNav.page';
import LandingPage from '../../pageobjects/landing.page';
import SearchResults from '../../pageobjects/searchResults.page';
import ProductDetailPage from '../../pageobjects/productDetailPage.page';
import Cart from '../../pageobjects/cart.page';
import CheckoutModal from '../../pageobjects/components/checkoutModal.page';
import Shipping from '../../pageobjects/shipping.page';
import SignIn from '../../pageobjects/components/signIn.page';
import productData from '../../data/productData.json';

describe('Etsy end-to-end purchase tests as Guest', () => {
    it('should be able search for a specific product, view product detail page, and checkout as a guest', async () => {
        //Navigate to Etsy and search for desired item
        await LandingPage.open();
        await TopNav.inputSearch.setValue('Swarovski crystal pearl dragonfly gold brooch');
        await TopNav.btnSearch.click();
        await SearchResults.firstSearchResult.click();
        
        //Product detail pages open in new tab that initializes with an 'about:blank' url,
        //We must hardcode a pause for the tab to redirct otherwise an error is thrown to the test runner
        await browser.pause(2500);
        await browser.switchWindow(/https:\/\/www.etsy.com\/listing\/.*/);

        //Add item to cart from product detail page and verify success message
        await expect(ProductDetailPage.btnAddToCart).toExist();
        await ProductDetailPage.btnAddToCart.click();
        await expect(ProductDetailPage.headerAddToCartSuccess).toHaveText('1 item added to cart');

        //Go to cart and proceed to checkout as guest
        await Cart.open();
        await Cart.btnCheckout.click();
        await CheckoutModal.btnContinueAsGuest.click();
        
        //Fill in shipping details and continue to payment
        await Shipping.fillRandomShippingData();
        await browser.scroll(0, 500);
        await Shipping.btnContinueToPayment.click();

        //Payment information would be entered on the next screens, but the test will end here for demonstration purposes.
    });

    it('should be able to edit cart before checking out as a guest', async () => {
        //Navigate to product page and add to cart
        await ProductDetailPage.openPDP(productData.products[2].productId, productData.products[2].productName);
        await ProductDetailPage.btnAddToCart.click();
        await expect(ProductDetailPage.headerAddToCartSuccess).toHaveText('1 item added to cart');

        //Go to cart and proceed to checkout as guest
        await Cart.open();
        const removeLink = await Cart.getRemoveLinkByProductId(productData.products[2].productId)
        await removeLink.click();
        
        await Cart.btnCheckout.click();
        await CheckoutModal.btnContinueAsGuest.click();

        //Fill in shipping details and continue to payment
        await Shipping.fillRandomShippingData();
        await browser.scroll(0, 500);
        await Shipping.btnContinueToPayment.click();

        //Payment information would be entered on the next screens, but the test will end here for demonstration purposes.
    });
});

xdescribe('Etsy end-to-end purchase tests as authenticated user', () => {
    it('should be able search for a specific product, view product detail page, and checkout as a guest', async () => {
        //Navigate to Etsy and search for desired item
        await LandingPage.open();
        await TopNav.btnSignIn.click();

        await SignIn.login('sam.spokowski@gmail.com', process.env.PASSWORD);

        await TopNav.inputSearch.setValue('Swarovski crystal pearl dragonfly gold brooch');
        await TopNav.btnSearch.click();
        await SearchResults.firstSearchResult.click();
        
        //Product detail pages open in new tab that initializes with an 'about:blank' url,
        //We must hardcode a pause for the tab to redirct otherwise an error is thrown to the test runner
        await browser.pause(2500);
        await browser.switchWindow(/https:\/\/www.etsy.com\/listing\/.*/);

        //Add item to cart from product detail page and verify success message
        await expect(ProductDetailPage.btnAddToCart).toExist();
        await ProductDetailPage.btnAddToCart.click();
        await expect(ProductDetailPage.headerAddToCartSuccess).toHaveText('1 item added to cart');

        //Go to cart and proceed to checkout as guest
        await Cart.open();
        await Cart.btnCheckout.click();
        await CheckoutModal.btnContinueAsGuest.click();
        
        //Fill in shipping details and continue to payment
        await Shipping.fillRandomShippingData();
        await browser.scroll(0, 500);
        await Shipping.btnContinueToPayment.click();

        //Payment information would be entered on the next screens, but the test will end here for demonstration purposes.
    });
});
