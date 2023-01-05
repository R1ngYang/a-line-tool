import { expect, test } from 'vitest'
import { numberArraySort } from '../../src'

test('JSON', () => {
    const input = [2, 1, 5, 3, 4]

    const output = numberArraySort(input)

    expect(JSON.stringify(output)).eq('[1,2,3,4,5]')
})