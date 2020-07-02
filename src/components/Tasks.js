import React from 'react';

function Tasks(props){
    return(
        <div className="task-container">
            <h3 className="task">{props.value}</h3>
            <div className="button-container">
                <button
                    onClick={() => {props.handleDelete(props.id)}}
                    className="delete-button">
                        X
                    </button>
            </div>
        </div>
    )
}

export default Tasks;