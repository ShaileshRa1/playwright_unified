import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import {expect} from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(60*100*2)

Then('Verify 1st item is added to cart and is shown correctly on cart page', async function () {
  //Get text for 1st item
  const firstLocator = await pageFixture.page.locator('//*[@id="item_4_title_link"]/div').textContent();
  console.log(firstLocator);
  //Check the text of 1st item
  expect(firstLocator).toEqual('Sauce Labs Backpack');
  //add 1st item to the cart
  await pageFixture.page.locator('//*[@id="add-to-cart-sauce-labs-backpack"]').click();

  //navigate to cart pageFixture.page
  await pageFixture.page.locator('//*[@id="shopping_cart_container"]/a').click();
  

  //From cart pageFixture.page get the text from the added item
  const secondLocator = await pageFixture.page.locator('//*[@id="item_4_title_link"]/div').textContent();
  console.log(secondLocator);
  //Assert that items added to the cart with product name
  expect(firstLocator?.trim()).toEqual(secondLocator?.trim());
  //remove cart item
  await pageFixture.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
});

Then('User removes cart item and verify that the cart is empty', async function () {
  //Get text for 1st item
  const firstLocator = await pageFixture.page.locator('//*[@id="item_4_title_link"]/div').textContent();
  console.log(firstLocator);
  //Check the text of 1st item
  expect(firstLocator).toEqual('Sauce Labs Backpack');
  //add 1st item to the cart
  await pageFixture.page.locator('//*[@id="add-to-cart-sauce-labs-backpack"]').click();

  //navigate to cart pageFixture.page
  await pageFixture.page.locator('//*[@id="shopping_cart_container"]/a').click();
  // await pageFixture.page.waitForTimeout(2000);

  //From cart pageFixture.page get the text from the added item
  const secondLocator = await pageFixture.page.locator('//*[@id="item_4_title_link"]/div').textContent();
  console.log(secondLocator);
  //Assert that items added to the cart with product name
  expect(firstLocator?.trim()).toEqual(secondLocator?.trim());
  //remove cart item
  await pageFixture.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await pageFixture.page.locator('[data-test="continue-shopping"]').click();
    await pageFixture.page.locator('[data-test="shopping-cart-link"]').click();
    await pageFixture.page.locator('[data-test="cart-list"]').click();
    expect(secondLocator?.trim()).toBeFalsy;
});





