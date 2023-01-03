import { expect, test } from 'vitest'
import { deepClone } from '../../src'

test('JSON', () => {
    const input = {
        foo: 'hello',
        bar: 'world',
    }

    const output = deepClone(input)

    expect(output === input).toBeFalsy();
    expect(JSON.stringify(output)).eq(JSON.stringify(input))
})
