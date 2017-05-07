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
			return (a*b)*c;
		}
		testFnNoParameters = function () {
			return "TEST TEST"
		}
	})
	it('fromFunctionToPromise returns a promise object', function () {
  		expect(typeof classInvocation.fromFunctionToPromise(testFnNoParameters())).to.equal("object");
    });

    it('fromFunctionToPromise returns the proper value with parameters passed in', function () {
    	classInvocation.fromFunctionToPromise(testFnParameters(2,3)).then(function (value) {
  			expect(value).to.equal(30)
  		})
  		
    });

     it('fromFunctionToPromise returns the proper value with no parameters passed in', function () {
    	classInvocation.fromFunctionToPromise(testFnNoParameters()).then(function (value) {
  			expect(value).to.equal("TEST TEST")
  		})
  		
    });

      it('fromFunctionToPromise returns the function with the proper value without it being invoked', function () {
    	classInvocation.fromFunctionToPromise(testFnNoParameters).then(function (value) {
  			expect(value).to.equal("TEST TEST")
  		})
  		
    });

})