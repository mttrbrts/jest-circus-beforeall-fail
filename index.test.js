
describe('failure in beforeAll', () => {
    beforeAll(async () => {
        return Promise.reject('failed in beforeAll');
    });

    // Because of the failure in the beforeAll, this test should not run.
    test('test 1', () => {
        console.warn('If you see this, the test ran. This is not expected behaviour!');
        return expect(1).toBe(1); 
    })
})