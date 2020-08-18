import React, {useState} from 'react'
import './Todo.css'

export default function Todo(props){
    const [isEditing, setEditing] = useState(false);
    const [newName,setNewName] = useState('');

    function handleChange(e){
        setNewName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        props.editTask(newName,props.id);
        setNewName('');
        setEditing(false);
    }

    const editingTemplate =(
        <form className="task-list-li" onSubmit={handleSubmit}>
            {/* <div className="edit-title">
                <label className="edit-label" htmlFor={props.id}>
                New name for </label><span>{props.name}</span>
            </div> */}
            <div className="task-list-item">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label htmlFor={props.id}>
                    <span className="task-strike"></span>
                    </label>
                <input id={props.id} className="edit-task-input" type="text" onChange={handleChange} />
            </div>
            <div className="edit-btn-wrap">
                <button type="submit" className="edit-task-btn">
                Save
                </button>
            </div>
            <div className="edit-btn-wrap">
                <button type="button" className="edit-task-btn" onClick={() => setEditing(false)}>
                Cancel
                </button>
            </div>
        </form>
    );
    const viewTemplate = (
            <div className="task-list-li">
                <div className="task-list-item">
                    <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                    />
                    <label htmlFor={props.id}>
                    {props.name}<span className="task-strike"></span>
                    </label>
                </div>
                <div className="edit-wrap">
                    <button type="button" className="edit-btn" onClick={() => setEditing(true)}>
                        <svg fill="#c0c0c4" viewBox="0 0 26 26">
                            <path fill="none" stroke="#c0c0c4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1" d="M8.938 22.608L1.088 24.912 3.392 17.063"/>
                            <path stroke="#dedeed" strokeWidth="1" d="M1.894 21.158l-.86 2.931c-.072.249-.004.517.178.7.135.134.316.207.5.207.067 0 .135-.01.2-.029l2.931-.86L1.894 21.158zM5.175 18.832L6.772 19.19 7.002 20.658 17.996 9.674 16.17 7.846zM19.202 10.857L8.123 21.926 9.546 23.35 20.669 12.324zM15.085 6.739L13.774 5.43 2.652 16.454 4.006 17.808zM21.666 11.229L14.771 4.334 16.349 2.855 23.243 9.75zM24.061 8.548l-6.607-6.608 1.014-1.025c.902-.902 2.373-.895 3.285.018l3.305 3.304c.912.913.92 2.384.018 3.286L24.061 8.548z"/>
                        </svg>
                    </button>
                </div>
                <div className="delete-wrap">
                    <button
                    type="button"
                    className="delete-btn"
                    onClick={() => props.deleteTask(props.id)}
                    >
                        <svg viewBox="0 0 40 40">
                            <path d="M15 15 L25 25 M25 15 L15 25" />
                        </svg>
                    </button>
                </div>
            </div>
    );
    
    return(
    <li>{isEditing ? editingTemplate : viewTemplate}</li>
    );
}

//editong & view template
//toggle the template > setEditing true or false
//handle editing change and submit and using callback props editTask to send newName and id back to <App>