import React from 'react'
import Modal from './Modal'
import useModalVisibility from './hooks/useModalVisibility'

function ModalApp() {
  const {isVisible, hide, show}  = useModalVisibility()

  return (
    <div>
        <button onClick={show}>Display modal</button>
        <Modal
          isOpen={isVisible}
          hide={hide}
        />
    </div>
  )
}

// Create a custom hook that creeates a debounced Value
// const value = useDebouncedValue(initialValue)

export default ModalApp