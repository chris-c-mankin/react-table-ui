import assert from "assert"
import pathToPathArr from "../../helpers/pathToPathArr"

describe('pathToPathArr', function() {
    it('should split path to path array', function() {
        assert.deepStrictEqual(pathToPathArr('one'),['one']);
        assert.deepStrictEqual(pathToPathArr('one.two'),['one','two']);
        assert.deepStrictEqual(pathToPathArr('one.two.three'),['one','two','three']);
    })
})