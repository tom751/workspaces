import { beforeEach } from 'vitest'



beforeEach(async () => {
  console.log('loading')
  await new Promise(r => setTimeout(r, 3000))
  console.log('done loading')
})