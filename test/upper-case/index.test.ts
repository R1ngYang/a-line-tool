import { expect, test } from 'vitest'
import { upperCase } from '../../src'

test('JSON', () => {
    const input = "hello world"
    const output = upperCase(input)
    expect(output).eq("HELLO WORLD")
})
