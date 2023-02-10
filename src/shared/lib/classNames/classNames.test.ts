import { classNames } from './classNames';

describe('classNames', () => {
    test('test only cls params', () => {
        const expected: string = 'someClass';
        expect(classNames('someClass')).toBe(expected);
    });
    test('test only cls and addition params', () => {
        const expected: string = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('test cls mods addition params', () => {
        const expected: string = 'someClass class1 class2 hovered collapsed';
        expect(
            classNames(
                'someClass',
                { hovered: true, collapsed: true },
                ['class1', 'class2'],
            ),
        )
            .toBe(expected);
    });

    test('test cls mods(with one false param) addition params', () => {
        const expected: string = 'someClass class1 class2 hovered';
        expect(
            classNames(
                'someClass',
                { hovered: true, collapsed: false },
                ['class1', 'class2'],
            ),
        )
            .toBe(expected);
    });
    test('test cls mods(with undefined param) addition params', () => {
        const expected: string = 'someClass class1 class2 hovered';
        expect(
            classNames(
                'someClass',
                { hovered: true, collapsed: undefined },
                ['class1', 'class2'],
            ),
        ).toBe(expected);
    });

    test('test only  addition params', () => {
        const expected: string = ' class1 class2';
        expect(classNames('', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('test only  mode params', () => {
        const expected: string = ' hovered';
        expect(classNames('', { hovered: true }, [])).toBe(expected);
    });

    test('test without params', () => {
        const expected: string = '';
        expect(classNames('', {}, [])).toBe(expected);
    });
});
