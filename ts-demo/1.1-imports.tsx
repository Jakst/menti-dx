import * as React from 'react'
import { useState } from 'react'

export const AutoImport = () => {
  // Instructions:
  // Remove useState from the imports, then put your cursor on useState on the line
  // below and press "Cmd + ." to invoke suggestions. Select the type of fix you want.
  const [enabled, setEnabled] = useState(false)

  function toggle() {
    setEnabled((v) => !v)
  }

  return <div onClick={toggle}>{enabled ? 'yes' : 'no'}</div>
}
