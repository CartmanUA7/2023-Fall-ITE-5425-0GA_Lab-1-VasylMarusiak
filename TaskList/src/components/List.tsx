import TaskList from "./TaskList";

type ListProps = {
    title: string,
    tasks: string[],
    id: number
};

const List = (props: ListProps) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <TaskList tasks={props.tasks} id={props.id} />
        </div>
    );
};

export default List;