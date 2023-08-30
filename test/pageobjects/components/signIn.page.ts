import { $ } from '@wdio/globals'
import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignIn extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () { return $('input[name="email"]') };

    public get inputPassword () { return $('input[name="password"]') };

    public get btnSubmit () { return $('button[type="submit"]') };

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (email: string, password?: string) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password || '');
        await this.btnSubmit.click();
    }

}

export default new SignIn();
