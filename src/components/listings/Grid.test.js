import data from '../../data/courses.json';

const numItems = data.length;

// test numbers with matchers
describe('Numbers with matchers', () => {
	test('number of items should be equal to 12', () => {
		expect(numItems).toBe(12);
	});

	test('number of items should be greater than or equal to 12', () => {
		expect(numItems).toBeGreaterThanOrEqual(12);
	});
});

// test strings with matchers
const dataTest = data[0].title;

describe('String with matchers', () => {
	test('there is a JS in this title', () => {
		expect(dataTest).toMatch(/JS/);
	});

	test('the title contains React', () => {
		expect(dataTest).toContain('React');
	});
});

// test arrays and objects with matchers
const data2 = [ 'React Native', 'React' ];

describe('Arrays and objects with matchers', () => {
	test('the list of courses contains React Native and React', () => {
		expect([ 'React Native', 'React', 'MeteorJS' ]).toEqual(expect.arrayContaining(data2));
	});

	// objects
	test('the first course to have a property title', () => {
		expect(data[0]).toHaveProperty('title');
	});

	test('the first course to have a property title and value 31,266', () => {
		expect(data[0]).toHaveProperty('views', '31,266');
	});
});
