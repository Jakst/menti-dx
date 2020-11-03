import * as React from 'react'
import { Divider } from '../components/Divider'
import IndexPage from '../pages'
import toggle from '../utils/toggle'

export const MultiAutoImport = () => {
  // Instructions:
  // When multiple imports are missing typescript can auto import all of them at once.
  // Remove all imports, except the top react one, then do the same thing as for a
  // single import suggestion but select "Add all missing imports".
  const [enabled, setEnabled] = React.useState(false)

  React.useEffect(() => {
    console.log('Running in an effect')
  })
  return (
    <>
      <div onClick={() => setEnabled(toggle)}>{enabled ? 'yes' : 'no'}</div>
      <Divider />
      <IndexPage />
    </>
  )
}
