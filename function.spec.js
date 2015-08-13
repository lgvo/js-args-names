import chai from 'chai';

import argumentsNamesOf from './function';

const expect = chai.expect;

describe('argumentsNamesOf', function() {

    it('should be defined as default', function() {
        expect(argumentsNamesOf).to.exist;
        expect(typeof argumentsNamesOf).to.equal('function');
    });

    it('should return the list of arguments names', function() {

        function test(one, two, three) {}

        expect(argumentsNamesOf(test)).to.eql(['one', 'two', 'three']);
        
    });

    it('should support docs', function() {

        function test(one/* test */, /* test */ two, /* test */ three /* test */) {}

        expect(argumentsNamesOf(test)).to.eql(['one', 'two', 'three']);
        
    });

    it('shoud support a function with no arguments', function() {

        function test() {}

        expect(argumentsNamesOf(test)).to.be.empty;
        
    });

    it('should support annonymous functions', function() {
       expect(argumentsNamesOf(function(a,b,c) {})).to.eql(['a', 'b', 'c']);
    });

});
