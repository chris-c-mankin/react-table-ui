import assert from "assert"
import unknownToString from "../../helpers/unknownToString"

describe('unknownToString', function() {
    it('should return string from string', function() {
        assert.strictEqual(unknownToString('foo'),'foo')
    })

    it('should return string from number', function() {
        assert.strictEqual(unknownToString(1),'1');
    })

    it('should return string from flat array', function() {
        assert.strictEqual(unknownToString([1,2,'three']),'1,2,three');
    })

    it('should return string from nested array', function() {
        assert.strictEqual(unknownToString([1,2,'three',[4,5]]),'1,2,three,4,5');
    })

    it('should return string from object', function() {
        assert.strictEqual(unknownToString({foo: 'bar'}),'{"foo":"bar"}');
    })

    it('should not display content of object in array', function() {
        assert.strictEqual(unknownToString([{foo: 'bar'}]),'[object Object]');
    })
});