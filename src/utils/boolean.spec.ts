import { describe, it, expect } from 'vitest'
import { isTrue } from './boolean'

describe('boolean', () => {
  it('returns the boolean val', () => {
    expect(isTrue(false)).toBeFalsy()
    expect(isTrue(true)).toBeTruthy()
  })
})
