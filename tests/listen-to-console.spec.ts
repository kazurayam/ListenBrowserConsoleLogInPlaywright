import { test, expect } from '@playwright/test';

test.beforeEach (async ({ page }) => {
  // Listen for all console logs
  page.on('console', msg => console.log(msg.text()))
  // Listen for all console events and handle errors
  //page.on('console', msg => {
  //  if (msg.type() === 'error')
  //    console.log(`Error text: "${msg.text()}"`);
  //});
  await page.goto('http://demoaut-mimic.kazurayam.com/');
});

test.describe('listen to console log', () => {
  test('should show a message like 2023/5/17 9:59:48', async ({ page }) => {

    // Get the next console log
    //const msgPromise = page.waitForEvent('console');
    //await page.evaluate(() => {
    //  console.log('hello', 42, { foo: 'bar' });  // Issue console.log inside the page
    //});
    //const msg = await msgPromise;
    // Deconstruct console log arguments
    //await msg.args()[0].jsonValue() // hello
    //await msg.args()[1].jsonValue() // 42
  });
});


