import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import request = require('request-promise');

let base_url = "http://localhost:3000/"

async function goToPage(page: string): Promise<void>{
    await browser.get("http://localhost:4200/");
    await expect(browser.getTitle()).to.eventually.equal('TemVaga');
    switch(page){
        case 'requested rides':{
            await $("a[name='requested-rides']").click();
            break;
        }
        case 'my rides':{
          await $("a[name='my-rides']").click();
          break;
        }
        case 'users':{
            await $("a[name='users']").click();
            break;
        }
        default:{
            break;
        }
    }
}

async function registerUser(): Promise<void>{
}

async function removeUser(): Promise<void>{
}

async function evaluateUser(): Promise<void>{

}

async function assertTamanhoEqual(set,qtt) {
    await set.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(qtt));
}

async function assertElementsWithSameName(qtt, name){

}

async function assertRide(driver, time, destiny, qtt) {
    var allRides:ElementArrayFinder = element.all(by.name('rideList'))
    var sameDrives = allRides.filter(elem => 
        elem.element(by.name('driverList')).getText().then(text => text === driver) && 
        elem.element(by.name('timeList')).getText().then(text => text === time) && 
        elem.element(by.name('destinyList')).getText().then(text => text === destiny)  
    )
    await assertTamanhoEqual(sameDrives, qtt);
}

async function cancelRide(driver, time, destiny) {
    const allRides = element.all(by.name('rideList'))
    var rides = allRides.filter(elem => 
        elem.element(by.name('driverList')).getText().then(text => text === driver) && 
        elem.element(by.name('timeList')).getText().then(text => text === time) && 
        elem.element(by.name('destinyList')).getText().then(text => text === destiny)  
    )
    const webElements = await rides.getWebElements();
    const cancelButton = await webElements[0].findElement(by.tagName('button'));
    await cancelButton.click();
}

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the "([^\"]*)" page$/, async (page) => {
        page = page.toString();
        await goToPage(page);
    })

    Given(/^I have driver "([^\"]*)" at the evaluation list$/, async (driver) => {
        driver = driver.toString();
    })

    Given(/^I have driver "([^\"]*)" at the users list$/, async (driver) => {
        driver = driver.toString();
    });

    Given(/^I have driver "([^\"]*)" at "(\d*)" hours to "([^\"]*)" at the drives list$/, async (driver, time, destiny) => {
        driver = driver.toString();
        time = time.toString();
        destiny = destiny.toString();
        await assertRide(driver, time, destiny, 1);
    })

    When(/^I evaluate "([^\"]*)" with "(\d*)" stars$/, async (driver, grade) => {
        driver = driver.toString();
        grade = grade.toString();
    });

    When(/^I try to access "([^\"]*)"$/, async (driver) => {
        driver = driver.toString();
    });

    When(/^I try to cancel the ride with "([^\"]*)" at "(\d*)" hours to "([^\"]*)"$/, async (driver, time, destiny) => {
        driver = driver.toString();
        time = time.toString();
        destiny = destiny.toString();

        await cancelRide(driver, time, destiny);
    })
    
    Then(/^I cannot see "([^\"]*)" at the evaluation list$/, async (driver) => {
        driver = driver.toString();
    });

    Then(/^I can see driver "([^\"]*)" have a "(\d*)" rating$/, async (driver, grade) => {
        driver = driver.toString();
        grade = grade.toString();
    });

    Then(/^I cannot see a ride with "([^\"]*)" at "(\d*)" hourd to "([^\"]*)" at the drives list$/, async (driver, time, destiny) => {
        driver = driver.toString();
        time = time.toString();
        destiny = destiny.toString();

        await assertRide(driver, time, destiny, 0);
    })
})