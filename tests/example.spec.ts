import { test, expect } from '@playwright/test';
import { FormFields } from '../pageObjects/formFields';

test('check form fields text box', async ({ page }) => {
    const formFields = new FormFields(page);
    await formFields.goto();
    await formFields.clickFillFormFieldTextBox('Name', 'Haresh');
    await formFields.clickFillFormFieldTextBox('Password', 'ABDC');
});
