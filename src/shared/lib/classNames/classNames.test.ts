import { classNames } from './classNames';

describe('classNames', () => {
  it('should return a string with first param', () => {
    expect(classNames('class1')).toBe('class1');
  });

  it('should return a string with additional class', () => {
    expect(classNames('class1', {}, ['class2', 'class3'])).toBe('class1 class2 class3');
  });

  it('should return a string with mods', () => {
    const expected = 'class1 class2 class3 hovered scrollable';
    expect(classNames('class1', { hovered: true, scrollable: true }, ['class2', 'class3'])).toBe(expected);
  });

  it('should return a string with mods false', () => {
    const expected = 'class1 class2 class3 hovered';
    expect(classNames('class1', { hovered: true, scrollable: false }, ['class2', 'class3'])).toBe(expected);
  });

  it('should return a string with mods undefined', () => {
    const expected = 'class1 class2 class3 hovered';
    expect(classNames('class1', { hovered: true, scrollable: undefined }, ['class2', 'class3'])).toBe(expected);
  });
});
