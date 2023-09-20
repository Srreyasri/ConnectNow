//import React from 'react';
import { useEffect } from "react";
import { 
  Container,
  Box, 
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
 } from "@chakra-ui/react";
import Login from '../components/Authentication/Login';
import Signup from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom";


const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
        history.push("/chats");
      }
    },[history]);

  return <Container maxW='x1' centerContent>
    <Box
    display='flex'
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    p={3}
    bg={"white"}
    w="60%"
    m="40px auto 15px auto"
    borderRadius="1g"
    borderWidth="1px"
    >
      <Text fontSize='4xl' fontFamily="Work sans" color="black">
        ConnectNow
      </Text>
    </Box>
    <Box bg="white" w="60%" p={4} borderRadius="1g" borderWidth="1px">
    <Tabs variant='soft-rounded' >
  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>

  </Container>;
    
};

export default HomePage;
