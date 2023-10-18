import '../App.css';

interface ITaskProps {
    id: number;
    name: string;
    deadline: number;    
    delete : (id: number) => void;    
}

const Task = (props : ITaskProps) => {
    return (
        <div className="task-container">
            <p className='task-name'>{props.name}</p>
            <p className='task-deadline'>{props.deadline}</p>
            <button className='task-delete-button'
               onClick = {() => props.delete(props.id)}>
                X
            </button>
        </div>
    )
}

export default Task;