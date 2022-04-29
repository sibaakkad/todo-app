import React from 'react'
import { Button, InputGroup, ListGroup, Badge } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, isCompleted } from '../redux/tasks/tasksSlice';

function Content() {
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();

  return (
    <div className='content'>
      <h2><Badge pill bg="light" text="dark">Uncompleted Tasks</Badge></h2>
      {tasks.map((element) => {
        if (element.completed == false) {
          return (
            <div className='uncompleted'>
              <ListGroup  >
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={(e) => dispatch(isCompleted([element.id, e.target.checked]))} />
                  <ListGroup.Item className='list' name="list" >{element.task}</ListGroup.Item>
                  <Button variant="danger" onClick={() => dispatch(deleteTask(element.id))}  ><i className="gg-trash"></i></Button>
                </InputGroup>
              </ListGroup>
            </div>
          )
        }
      })}
      <hr />
      <h2><Badge pill bg="light" text="dark">Completed Tasks</Badge></h2>
      {tasks.map((element) => {
        if (element.completed == true) {
          return (
            <div className='completed'>
              <ListGroup  >
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" checked onChange={(e) => dispatch(isCompleted([element.id, e.target.checked]))} />
                  <ListGroup.Item className='list' name="list" >{element.task}</ListGroup.Item>
                  <Button variant="danger" onClick={() => dispatch(deleteTask(element.id))}  ><i className="gg-trash"></i></Button>
                </InputGroup>
              </ListGroup>
            </div>
          )
        }
      })}
    </div>
  )
}
export default Content;