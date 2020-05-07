describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a ScrollView component', async () => {
    await expect(element(by.id('sview'))).toBeVisible();
  });

  it('should contain feedback page', async () => {
    await expect(element(by.label('Feedback'))).toBeVisible();
  });

  it('should contain contact us page', async () => {
    await expect(element(by.label('Contact us'))).toBeVisible();
  });

  it('should contain admin portal page', async () => {
    await expect(element(by.label('Admin portal'))).toBeVisible();
  });

  it('should have a button in the grid and shoule be able to get into the 2nd layer', async () => {
    await element(by.label('Lifestyle')).tap();
    await waitFor(element(by.label('Fitness'))).toBeVisible().withTimeout(2000);
  });

  it('should be able to get into 3rd layer', async () => {
    await element(by.label('Immigration')).tap();
    await waitFor(element(by.label('General'))).toBeVisible().withTimeout(2000);
    await element(by.label('General')).tap();
    await waitFor(element(by.label('Amor Network'))).toBeVisible().withTimeout(2000);
  });

});
