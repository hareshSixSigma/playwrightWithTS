

import { Page, Locator, expect } from '@playwright/test';

export class FormFields {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://practice-automation.com/form-fields/');
  }

  async clickFillFormFieldTextBox(textBoxName:string, textToFill:string) {
    await this.page.getByRole('textbox', {name:textBoxName}).fill(textToFill)
  }

}
