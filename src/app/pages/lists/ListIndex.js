import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

function ListIndex() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  }

  const addItem =() => {
    if(userInput === "") return;

    const userInputData = {
        id: Math.random(),
        value: userInput,
    };
    const listArr = [...list];

    listArr.push(userInputData);

    setUserInput("");
    setList(listArr);
  }

  const deleteItem =(key)=> {
     const listArr = [...list];
     const updateList = listArr.filter((item) => item.id !== key);

     setList(updateList);
  }

  const editItem = (index) => {
     const todos = [...list];
     const editedTodo = prompt('Edit the todo:');

     if (editedTodo !== null && editedTodo.trim() !== '') {
       let updatedTodos = [...todos];
       updatedTodos[index].value = editedTodo;


      setList(updatedTodos);
     }
   }


  return (
    <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
          }}>
            TODO LIST
        </Row>

        <hr />
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="add item . . . "
                    size="lg"
                    value={userInput}
                    onChange={(item) =>
                      updateInput(item.target.value)
                    }
                    aria-label="add something"
                    aria-describedby="basic-addon2"
                />
                <Button
                    variant="dark"
                    onClick={() => addItem()}
                >
                    ADD
                </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>
            <Col md={{ span: 5, offset: 4 }}>
                <ListGroup>
                    {/* map over and print items */}
                    {list?.map((item, index) => {
                        return (
                          <div key = {index} >
                            <ListGroup.Item
                                variant="dark"
                                action
                                style={{display:"flex",
                                        justifyContent:'space-between'
                              }}
                            >
                                {item.value}
                                <span>
                                <Button
                                  style={{marginRight:"10px"}}
                                  variant = "light"
                                  onClick={() => deleteItem(item.id)}>
                                  Delete
                                </Button>
                                <Button
                                  variant = "light"
                                  onClick={() => editItem(index)}>
                                    Edit
                                </Button>
                                </span>
                            </ListGroup.Item>
                          </div>
                        );
                    })}
                </ListGroup>
            </Col>
        </Row>
    </Container>
  );
}

export default ListIndex;
