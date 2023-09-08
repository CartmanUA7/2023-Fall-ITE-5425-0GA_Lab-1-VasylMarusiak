import { useState } from "react";
import TaskContext from "./CounterContext";
import Header from "./components/Header";
import List from "./components/List";

const tasklist = [
  {
    title: 'Humber',
    tasks: ['Task 1', 'Task 2', 'Task 3'],
    id: 1,
  },
  {
    title: 'MERN',
    tasks: ['Lab', 'Project', 'Quiz'],
    id: 2,
  },
  {
    title: 'Java',
    tasks: ['Group Discussion', 'Exam', 'Assignment'],
    id: 3,
  },
];

function App() {
  const [stateCounter, setStateCounter] = useState(tasklist.reduce((acc, cur) => acc + cur.tasks.length, 0));

  return (
    <>
      <TaskContext.Provider value={{ counter: stateCounter, setCounter: setStateCounter }}>
        <Header total={stateCounter} />
        {tasklist.map((e) => (
          <List
            title={e.title}
            tasks={e.tasks}
            id={e.id}
            key={e.id.toString()}
          />

        ))}
      </TaskContext.Provider>
    </>
  )
}

export default App;
