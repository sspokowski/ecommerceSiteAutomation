import { $, $$ } from '@wdio/globals';
import { Key } from 'webdriverio';
import { Chance } from 'chance';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Shipping extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () { return $('#shipping-form-email-input') };
    public get inputEmailConfirmation () { return $('#shipping-form-email-confirmation') };
    public get selectCountry () { return $('select[name="country_id"]') };
    public get inputFullName () { return $('input[data-field="name"]') };
    public get inputStreetAddress () { return $('input[data-field="first_line"]') };
    public get inputApartment () { return $('input[data-field="second_line"]') };
    public get inputZipCode () { return $('input[data-field="zip"]') };
    public get inputCity () { return $('input[data-field="city"]') };
    public get selectState () { return $('select[data-field="state"]') };
    public get btnContinueToPayment () { return $('div[data-selector-form-footer=""]').$('button[data-selector-save-btn=""]') };

    public async fillRandomShippingData () {
        const chance = new Chance();
        const email = chance.email();
        await this.inputEmail.setValue(email);
        await this.inputEmailConfirmation.setValue(email);
        await this.inputFullName.setValue(`${chance.first()} ${chance.last()}`);
        await this.inputStreetAddress.setValue(chance.address());
        await this.inputZipCode.setValue('55117');
        await this.inputCity.setValue(chance.city());
        await this.selectState.selectByAttribute('value', 'MN');
    }
    
}

export default new Shipping();
