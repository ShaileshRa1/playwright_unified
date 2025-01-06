import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60*100*2)


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
  //await page.getByTestId('logout_sidebar_link').click();
  await pageFixture.page.getByText('Logout').click();
  
});

// Then('Add 1st item to the cart', async function () {
//   await page.locator('//*[@id="add-to-cart-sauce-labs-backpack"]').click;
// });

// Then('User navigates to cart page', async function () {
//   await page.locator('//*[@id="shopping_cart_container"]/a').click();
//   await page.waitForTimeout(2000);
// });

// Then('Verify 1st item is added to cart and is shown correctly on cart page', async function () {
//   //Get text for 1st item
//   const firstLocator = await page.locator('//*[@id="item_4_title_link"]/div').textContent();
//   //const firstText = await firstLocator.textContent();
//   console.log(firstLocator);
//   //Check the text of 1st item
//   expect(firstLocator).toEqual('Sauce Labs Backpack');
//   //add 1st item to the cart
//   await page.locator('//*[@id="add-to-cart-sauce-labs-backpack"]').click();

//   //navigate to cart page
//   await page.locator('//*[@id="shopping_cart_container"]/a').click();
//   // await page.waitForTimeout(2000);

//   //From cart page get the text from the added item
//   const secondLocator = await page.locator('//*[@id="item_4_title_link"]/div').textContent();
//   console.log(secondLocator);
//   //Assert that items added to the cart with product name
//   expect(firstLocator?.trim()).toEqual(secondLocator?.trim());
// });

// Then('User removes cart item and verify that the cart is empty', async function () {
//   //Get text for 1st item
//   const firstLocator = await page.locator('//*[@id="item_4_title_link"]/div').textContent();
//   console.log(firstLocator);
//   //Check the text of 1st item
//   expect(firstLocator).toEqual('Sauce Labs Backpack');
//   //add 1st item to the cart
//   await page.locator('//*[@id="add-to-cart-sauce-labs-backpack"]').click();

//   //navigate to cart page
//   await page.locator('//*[@id="shopping_cart_container"]/a').click();
//   // await page.waitForTimeout(2000);

//   //From cart page get the text from the added item
//   const secondLocator = await page.locator('//*[@id="item_4_title_link"]/div').textContent();
//   console.log(secondLocator);
//   //Assert that items added to the cart with product name
//   expect(firstLocator?.trim()).toEqual(secondLocator?.trim());
//   //remove cart item
//   await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
//     await page.locator('[data-test="continue-shopping"]').click();
//     await page.locator('[data-test="shopping-cart-link"]').click();
//     await page.locator('[data-test="cart-list"]').click();
//     expect(secondLocator?.trim()).toBeFalsy;
// });


Then('Close the browser', async function () {
});




