import React from 'react'

function TodoList({todoList}) {
    //console.log(todoList)
    //console.log({todoList})
    return (
        <div>
            {todoList.map((todoListItem, index)=>{
                return(
                    <div key={todoList+index} style={{display:'flex',gap:20}}>
                        <span>{todoListItem}</span>
                        {/* homework:-if we click on 'x' then current todoListItem deleted */}
                        <span>x</span>
                    </div>
                )
            })}
            
            {/*above same as below because single return*/}
            {/* {todoList.map((todoListItem)=>
                <div>{todoListItem}</div>
            )} */}
        </div>
    )
}

export default TodoList