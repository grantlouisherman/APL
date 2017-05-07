const chai = require('chai');
const expect = chai.expect;
const PromiseConverter = require('../PromiseConverter');
describe('Testing fromFunctionToPromise', function () {
	let classInvocation;
	let testFnParameters,testFnNoParameters; 
	beforeEach(function () {
		classInvocation = new PromiseConverter();
		testFnParameters = function (a,b) {
			let c = 5;
			return (a*b)^c;
		}
		testFnNoParameters = function () {
			return "TEST TEST"
		}
	})
	it('fromFunctionToPromise returns a promise object', function () {
  		expect(typeof classInvocation.fromFunctionToPromise(testFnNoParameters())).to.equal("object");
    });

})