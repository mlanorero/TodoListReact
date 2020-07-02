import React, { Fragment } from 'react';
import Tasks from './Tasks';

function TaskList (props) {
    return(
        <Fragment>
            {props.tasks.map((task, id) =>
            <Tasks key={id}
                id={id}
                handleDelete={props.handleDelete}
                value={task}
            />
            )}
        </Fragment>
    )
}

export default TaskList;