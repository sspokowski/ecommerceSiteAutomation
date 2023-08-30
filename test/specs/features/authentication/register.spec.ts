import { expect } from '@wdio/globals'
import SignIn from '../../../pageobjects/components/signIn.page';
import TopNav from '../../../pageobjects/components/topNav.page';
import LandingPage from '../../../pageobjects/landing.page';

describe('Etsy registration tests', () => {
    it('should be able to register a new user', async () => {
        await LandingPage.open('');

        await TopNav.btnSignIn.click();
        await SignIn.login('tomsmith', 'SuperSecretPassword!');
    });
});

