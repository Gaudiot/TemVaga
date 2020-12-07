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
    })
    
    Then(/^I cannot see "([^\"]*)" at the evaluation list$/, async (driver) => {
        driver = driver.toString();
    });

    Then(/^I can see driver "([^\"]*)" have a "(\d*)" rating$/, async (driver, grade) => {
        driver = driver.toString();
        grade = grade.toString();
    });

    Then(/^I cannot see a ride with "([^\"]*)" at the rides list$/, async (driver) => {
        driver = driver.toString();
    })
})
