import Dummy from '@/components/Dummy'
import { describe, it, expect } from 'vitest'
import { render } from '@/test/utils'


describe('Dummy', () => {
  describe('Nested Dummy', () => {
    it('should be a dummy', () => {
      const { getByText } = render(<Dummy />)

      expect(getByText('Dummy')).toBeVisible()
    })
  })
})
