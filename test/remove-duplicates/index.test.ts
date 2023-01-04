import { expect, test } from 'vitest'
import { removeDuplicates } from '../../src'

test('JSON', () => {
    const input = [1, 2, 3, 3, 4, 5, 5]

    const output = removeDuplicates(input)

    expect(JSON.stringify(output)).eq('[1,2,3,4,5]')
})
