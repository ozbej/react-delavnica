import './App.css';
import propTypes from "prop-types";
import {useState} from "react";
import { Input, Button, Container, Flex, Box } from "@chakra-ui/react"

export default function App(props, state) {

    const [name, setName] = useState(props.name);
    const [input, setInput] = useState();

    function inputChanged(event) {
        setInput(event.target.value);
    }

    function nameChanged(event) {
        setName(input);
    }

  return (
      <Container>
          <Box w={"100%"} p={4}>
              Hello {name}
          </Box>
          <Flex>
              <Input type={"text"} onChange={inputChanged}></Input>
              <Button onClick={nameChanged} colorScheme={"blue"}>Push</Button>
          </Flex>
      </Container>
  );
}

App.propTypes = {
    name: propTypes.string
}