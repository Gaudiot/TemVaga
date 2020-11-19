import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the "Caronas Disponíveis" page$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('TemVaga');
        await $("a[name='caronasdisp']").click();
    })

    Given(/^the system has only registered a ride with "Local de partida" equal to "([^\"]*)" and a second ride with "Local de partida" equal to "([^\"]*)"$/, async (road1, road2) => {
        var alldeparturelocation : ElementArrayFinder = element.all(by.name('localdepartidalist'));
        await alldeparturelocation;
        var samedeparturelocation1 = alldeparturelocation.filter(elem => elem.getText().then(text => text === road1));
        await samedeparturelocation1;
        var samedeparturelocation2 = alldeparturelocation.filter(elem => elem.getText().then(text => text === road2));
        await samedeparturelocation2;
        await alldeparturelocation.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(2));
        await samedeparturelocation1.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
        await samedeparturelocation2.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    })

    When(/^I have filled in the field "Partida: Rua:" with "([^\"]*)" and I ask the system to search for rides$/, async (road) => {
        await $("input[name='partidaruabox']").sendKeys(<string> road);
        await element(by.buttonText('Pesquisar')).click();
    })

    Then(/^I get a list showing the ride that has "Local de partida" equal to "([^\"]*)", that is the ride that I am eligible to receive$/, async (road) => {
        var alldeparturelocation : ElementArrayFinder = element.all(by.name('localdepartidalist'));
        await alldeparturelocation;
        var samedeparturelocation = alldeparturelocation.filter(elem => elem.getText().then(text => text === road));
        await samedeparturelocation;
        await alldeparturelocation.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });
})