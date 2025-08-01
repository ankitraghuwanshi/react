import { useState } from 'react'

// Custom hook,
// we can use ANY other hooks inside this hook,
// but we have to return some values, instead of JSX like a component
function useModalVisibility() {
    const [isVisible, setIsVisible] = useState(false)

    const show = () => setIsVisible(true)
    const hide = () => setIsVisible(false)

    return {
        isVisible,
        show,
        hide
    }
}

export default useModalVisibility;

//regular function
// function add(x,y){
//     return x+y
// }