import React from 'react'

class AppClass extends React.Component{
    render(){
        const {text1,text2}=this.props
        return (
            <div>{text1} {text2}</div>
        )
    }
}

export default AppClass