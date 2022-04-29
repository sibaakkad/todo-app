import { React, useState } from 'react'
import { Form, Container, Button, Badge, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasks/tasksSlice';

function AddTask() {

  const [taskName, setTaskName] = useState("");
  const handleOnClick = () => setTaskName("");

  let generateId = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16).substring(1);

  const tempObject = { id: generateId, task: taskName, completed: false }

  const dispatch = useDispatch();
  return (
    <div className='add-task'>
      <h1><Badge pill bg="dark" >TODO LIST</Badge>  </h1>
      <Container fluid className='task-container'>
        <Form className="d-flex"  >
          <FormControl
            type="search"
            placeholder="Add New Todo"
            className="me-2"
            aria-label="Search" value={taskName} onChange={(e) => setTaskName(e.target.value)}
          />
          <Button onClick={() => { dispatch(addTask(tempObject)); handleOnClick() }} variant="success">Add</Button>
        </Form>
      </Container>
    </div>
  )
}
export default AddTask;