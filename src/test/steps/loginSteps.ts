import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60 * 100 * 2)


Given('User navigates to app', async function () {
  await pageFixture.page.goto("https://www.saucedemo.com/");
});

Given('Sauce Demo Website login page', async function () {
  await expect(pageFixture.page).toHaveTitle(/Swag Labs/);

});

When('user enters valid username {string} and password {string}', async function (username, password) {
  await pageFixture.page.getByPlaceholder('Username').fill(username);
  await pageFixture.page.getByPlaceholder('Password').fill(password);

});

When('Error message {string} is shown', async function (message) {
  await expect(pageFixture.page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')).toHaveText(message);

});

Then('User click on the login button', async function () {
  await pageFixture.page.getByRole('button', { name: 'Login' }).click();

});

Then('login is successful', async function () {
  await expect(pageFixture.page).toHaveURL('https://www.saucedemo.com/inventory.html');

});

Then('user logs out', async function () {
  await pageFixture.page.getByRole('button', { name: 'Open Menu' }).click();
  await pageFixture.page.getByText('Logout').click();

});


Then('Close the browser', async function () {
});




