import { expect } from '@wdio/globals'
import SignIn from '../../../pageobjects/components/signIn.page';
import TopNav from '../../../pageobjects/components/topNav.page';
import LandingPage from '../../../pageobjects/landing.page';

describe('Etsy signin tests', () => {
    it('should be able to sign an existing user in', async () => {
        await LandingPage.open();

        await TopNav.btnSignIn.click();
        await SignIn.login('sam.spokowski@gmail.com', process.env.PASSWORD);
    
        //TODO Add Assertions
    });
});

