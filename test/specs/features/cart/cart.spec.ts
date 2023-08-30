import { browser, expect } from '@wdio/globals';
import ProductDetailPage from '../../../pageobjects/productDetailPage.page';
import Cart from '../../../pageobjects/cart.page';
import productData from '../../../data/productData.json';

describe('cart tests', () => {

    it('should be able to add multiple items to cart and have cart reflect correct subtotal', async () => {
        await ProductDetailPage.openPDP(productData.products[0].productId, productData.products[0].productName);
        await ProductDetailPage.btnAddToCart.click();
        await expect(ProductDetailPage.headerAddToCartSuccess).toHaveText('1 item added to cart');

        await ProductDetailPage.openPDP(productData.products[1].productId, productData.products[1].productName);
        await ProductDetailPage.btnAddToCart.click();
        await expect(ProductDetailPage.headerAddToCartSuccess).toHaveText('1 item added to cart');

        await Cart.open();

        const expectedSubTotal = await Cart.calculateSubTotal([productData.products[0].productId, productData.products[1].productId]);
        const subTotalString = await Cart.spanSubtotalSale.getText();
        const actualSubTotal: number = +subTotalString;

        expect(actualSubTotal).toBe(expectedSubTotal);
    });

    it('should be able to add update the quantity of items in cart and remove them', async () => {
        await ProductDetailPage.openPDP(productData.products[2].productId, productData.products[2].productName);
        await ProductDetailPage.btnAddToCart.click();
        await expect(ProductDetailPage.headerAddToCartSuccess).toHaveText('1 item added to cart');

        await Cart.open();

        const quantitySelector = await Cart.getQuantitySelectorByProductId(productData.products[2].productId)
        await quantitySelector.selectByAttribute('value', '2');

        const removeLink = await Cart.getRemoveLinkByProductId(productData.products[2].productId)
        await removeLink.click();

        //TODO: add assertions
    });
});
