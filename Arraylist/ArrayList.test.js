const ArrayList = require('./ArrayList');

describe('ArrayList', () => {
    let arrayList;

    beforeEach(() => {
        arrayList = new ArrayList();
    });

    test('should add elements to the list', () => {
        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(3);
        expect(arrayList.size()).toBe(3);
    });

    test('should get elements by index', () => {
        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(3);
        expect(arrayList.get(0)).toBe(1);
        expect(arrayList.get(1)).toBe(2);
        expect(arrayList.get(2)).toBe(3);
    });

    test('should throw an error when getting an element with an invalid index', () => {
        arrayList.add(1);
        expect(() => arrayList.get(-1)).toThrow('Index out of bounds');
        expect(() => arrayList.get(1)).toThrow('Index out of bounds');
    });

    test('should remove elements by index', () => {
        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(3);
        expect(arrayList.remove(1)).toBe(2);
        expect(arrayList.size()).toBe(2);
        expect(arrayList.get(0)).toBe(1);
        expect(arrayList.get(1)).toBe(3);
    });

    test('should throw an error when removing an element with an invalid index', () => {
        arrayList.add(1);
        expect(() => arrayList.remove(-1)).toThrow('Index out of bounds');
        expect(() => arrayList.remove(1)).toThrow('Index out of bounds');
    });

    test('should handle edge cases gracefully', () => {
        // Removing from an empty list
        expect(() => arrayList.remove(0)).toThrow('Index out of bounds');

        // Getting from an empty list
        expect(() => arrayList.get(0)).toThrow('Index out of bounds');

        // Adding and removing multiple elements
        for (let i = 0; i < 10; i++) {
            arrayList.add(i);
        }
        expect(arrayList.size()).toBe(10);
        for (let i = 0; i < 10; i++) {
            expect(arrayList.remove(0)).toBe(i);
        }
        expect(arrayList.size()).toBe(0);
    });
});
