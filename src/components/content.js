import React from 'react'
import { Button, InputGroup, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasks/tasksSlice';

function Content() {
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();
  return (
    <div className='content'>
      {tasks.map((element) => (
        <ListGroup  >
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <ListGroup.Item className='list'  >{element.task}</ListGroup.Item>
            <Button variant="danger" onClick={() => dispatch(deleteTask(element.id))}  ><i className="gg-trash"></i></Button>
          </InputGroup>
        </ListGroup>
      ))}
      <hr />
    </div>
  )
}
export default Content;