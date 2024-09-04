import HelloWorld from '../src/HelloWorld.js';

describe('HelloWorld', () => {
    test('greets with default name', () => {
        const helloWorld = new HelloWorld();
        expect(helloWorld.greet()).toBe('Hello, World!');
    });

    test('greets with custom name', () => {
        const helloWorld = new HelloWorld();
        expect(helloWorld.greet('Jest')).toBe('Hello, Jest!');
    });
});