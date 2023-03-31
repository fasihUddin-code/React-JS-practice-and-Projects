import React from "react";


const ToDoLists = (props) => {
    //console.log('todo list component');


    return (
        <>
            <div className="todo_style">
                <li className="list-group-item mt-3">
                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
                    {props.text}
               
                <i

                    className="fa fa-remove fa-2x pull-right"
                    style={{ fontSize: 24 }}
                    onClick={() => {
                        props.onSelect(props.id)
                    }}

                />
                </li>


            </div>
        </>
    )

}

export default ToDoLists;