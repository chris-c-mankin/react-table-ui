import assert from "assert"
import get from "../../helpers/get"

describe('get', function() {
    it('should return value using Getter of type Path', function() {
        assert.strictEqual(get({one: 'two'}, 'one'),'two')
        assert.strictEqual(get({one: {two: 'three'}}, 'one.two'),'three')
    })

    it('should return value using Getter of type Locater', function() {
        assert.strictEqual(get({one: 'two'}, [(obj) => obj.one]), 'two')
        assert.strictEqual(get({one: {two: 'three'}}, [(obj) => obj.one.two]), 'three')
    })

    it('should return value using Getter of type Locater with additional args', function() {
        assert.strictEqual(get({one: 1}, [(obj, val: number) => obj.one + val, 2]), 3)
        assert.strictEqual(get({one: 1}, [(obj, val1: number, val2: number) => obj.one + val1 + val2, 2, 3]), 6)
    })
});