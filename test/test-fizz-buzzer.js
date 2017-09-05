const should = require('chai').should();

const fizzbuzz = require('../fizzBuzzer');

describe('fizzbuzz', function() {
	//Test the normal case
	it('Should call the appropriate output', function() {
		const normalCases = [
		{a: 15, expected: "fizz-buzz"},
		{a: 5, expected: "buzz"},
		{a: 6, expected: "fizz"},
		{a: 7, expected: 7}
		];
	//normal cases
	 normalCases.forEach(function(input) {
      const answer = fizzbuzz(input.a);
      answer.should.equal(input.expected);
    });
	})

	 it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a', 1],
      ['1', 2],
      [2, false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          adder(input[0], input[1])
      }).should.throw(Error);
    });
  });
});