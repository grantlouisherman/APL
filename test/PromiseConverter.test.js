const chai = require('chai');
const expect = chai.expect;
const PromiseConverter = require('../PromiseConverter');
describe('Testing fromFunctionToPromise', function() {
    let classInvocation;
    let testFnParameters, testFnNoParameters;
    beforeEach(function() {
        classInvocation = new PromiseConverter();
        testFnParameters = function(a, b) {
            let c = 5;
            return (a * b) * c;
        }
        testFnNoParameters = function() {
            return "TEST TEST"
        }
    })
    it('fromFunctionToPromise returns a promise object', function() {
        expect(typeof classInvocation.fromFunctionToPromise(testFnNoParameters())).to.equal("object");
    });

    it('fromFunctionToPromise returns the proper value with parameters passed in', function() {
        classInvocation.fromFunctionToPromise(testFnParameters(2, 3)).then(function(value) {
            expect(value).to.equal(30)
        })

    });

    it('fromFunctionToPromise returns the proper value with no parameters passed in', function() {
        classInvocation.fromFunctionToPromise(testFnNoParameters()).then(function(value) {
            expect(value).to.equal("TEST TEST")
        })

    });

    it('fromFunctionToPromise returns the function with the proper value without it being invoked', function() {
        classInvocation.fromFunctionToPromise(testFnNoParameters).then(function(value) {
            expect(value).to.equal("TEST TEST")
        })

    });

})

describe('Testing fromArrayToPromiseAll', function() {
    let classInvocation;
    let arrayOfFunctions = [];

    beforeEach(function() {
        classInvocation = new PromiseConverter();
        let testFnParameters = function(a, b) {
            let c = 5;
            return (a * b) * c;
        }
        let testFnNoParameters = function() {
            return "TEST TEST"
        }

        var anotherFunction = function(twodigit) {
            let num = twodigit.toString().split("");
            num[0] = num[1]
            num[1] = 2
            return parseInt(num.join(""))
        }

        let finalFunction = function() {
            return "hello world".split("").join("+")
        }

        arrayOfFunctions.push(testFnParameters(1, 2));
        arrayOfFunctions.push(testFnNoParameters);
        arrayOfFunctions.push(anotherFunction(21));
        arrayOfFunctions.push(finalFunction);
    })
    it('fromArrayToPromiseAll returns a promise object', function() {
        expect(typeof classInvocation.fromArrayToPromiseAll(arrayOfFunctions)).to.equal("object");
    });

    it('fromArrayToPromiseAll returns a promise object', function() {
        classInvocation.fromArrayToPromiseAll(arrayOfFunctions).then(function(values) {
            expect(values[0]).to.equal(10);
            expect(values[1]).to.equal("TEST TEST");
            expect(values[2]).to.equal(12);
            expect(values[3]).to.equal('h+e+l+l+o+ +w+o+r+l+d');


        })

    });




})
