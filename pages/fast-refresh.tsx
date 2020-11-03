import { useState, VFC } from 'react'
import { Divider } from '../components/Divider'
import Readme from '../readmes/fast-refresh.md'

const FastRefreshPage: VFC = () => {
  return (
    <>
      <Readme />

      <Divider />

      <FastRefreshDemo1 />

      <Divider />

      <FastRefreshDemo2 />

      <Divider />

      <FastRefreshDemo3 />
    </>
  )
}

export default FastRefreshPage

// Demo 1 - instructions:
// ----------------------------------------------------------------------------
// Change the backgroundColor variable and see that it immediately updates.
// You can also play with the text, add or remove components,
// or anything else you can come up with that you can do with react.
const FastRefreshDemo1: VFC = () => {
  const backgroundColor = 'skyblue'

  return (
    <div>
      <h3>Demo 1 - See changes live</h3>
      <div style={{ backgroundColor, padding: 10 }}>
        This content can be changed live.
      </div>
    </div>
  )
}

// Demo 2 - instructions
// ----------------------------------------------------------------------------
// This component has local state. Try editing all the props of the button and
// notice that it updates live without breaking the state of the component.
// The finger will stay rotated while the component updates.
const FastRefreshDemo2: VFC = () => {
  const [tilt, setTilt] = useState(false)

  const rotation = tilt ? 45 : 0

  return (
    <div>
      <h3>Demo 2 - Components keep state</h3>
      <p>Click the finger to rotate</p>
      <button
        style={{
          backgroundColor: 'skyblue',
          padding: 40,
          fontSize: 50,
          transform: `rotate(${rotation}deg)`,
          transition: 'all 0.15s ease-out',
        }}
        onClick={() => setTilt((value) => !value)}
      >
        ☝️
      </button>
    </div>
  )
}

// Demo 3 - instructions
// ----------------------------------------------------------------------------
// It's not uncommon to occasionally crash the applicaton while developing.
// Fast Refresh does it's best to recover from such errors, and can often
// restore the application on your next non-crashing save.
//
// Change the crash-boolean from false to true and save. This will display an
// error popup(thanks next.js!). Change it back to false and save again, and
// the application will be back in a working state. Your local component state
// will be lost, but at least you did not need to refresh.
const FastRefreshDemo3: VFC = () => {
  const crash = false

  return (
    <div>
      <h3>Demo 3 - Error recovery</h3>
      <div
        style={{
          backgroundColor: 'skyblue',
          padding: 20,
        }}
      >
        🔥💥 You're gonna crash this component, but it will recover if you fix
        the bad code.
        {crash && <ErrorComponent />}
      </div>
    </div>
  )
}

const ErrorComponent: VFC = () => {
  throw new Error('I crash things. That`s my job.')
}
