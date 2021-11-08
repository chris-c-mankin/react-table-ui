import assert from 'assert';
import resolvePath from '../../helpers/resolvePath';

describe('resolvePath', function() {
    it('should return value at path', function() {
        assert.strictEqual(resolvePath({one: true}, ['one']),true);
        assert.strictEqual(resolvePath({two: 'hello'},['two']), 'hello');
    })

    it('should return value at nested path', function() {
        assert.strictEqual(resolvePath({one: {two: 'hello'}},['one','two']),'hello');
        assert.strictEqual(resolvePath({one: {two: {three: 'hello'}}},['one','two','three']),'hello');
    })

    it('should return undefined if path does not exist', function() {
        assert.strictEqual(resolvePath({one: 'hello'},['two']), undefined);
        assert.strictEqual(resolvePath({one: {two: {three: 'hello'}}},['one','two','four']), undefined);
    })


})