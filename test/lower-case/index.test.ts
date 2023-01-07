import { expect, test } from 'vitest'
import { lowerCase } from '../../src'

test('JSON', () => {
    const input = "Hello World"
    const output = lowerCase(input)
    expect(output).eq("hello world")
})
