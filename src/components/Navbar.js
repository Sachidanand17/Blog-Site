import React, { useState } from 'react';
import {useParams} from "react-router-dom/cjs/react-router-dom";
 import { Formik } from 'formik';
 import * as Yup from 'yup';
 import { Stack, HStack, VStack, Box, Img, Image } from '@chakra-ui/react'
 import { Flex, Spacer } from '@chakra-ui/react'
 import { Input } from '@chakra-ui/react'
 import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

 
 const Navbar = (props) => {
   const {name} = useParams()

  console.log(props);

   return (
    <>
     <Box bg="#886FE9" width="100%" height="70px"  display="flex" justifyContent="center"  borderBottom="1px solid silver">
         
         <Flex width="40%" alignItems="center" float="left">
            
         </Flex>

         <Flex
         float="right"
         width="60%"
         height="100%"
         justifyContent="flex-end"
         alignItems="center"
        
         >
            <Link to={`/papers/${name}`}><Box mr="10px" p="20px" _hover={{bg: "black", color: "white"}}>ResearchPapers</Box></Link>
            <Link to={`/home/${name}`}> <Box p="20px"  _hover={{bg: "black", color: "white"}}>Home</Box></Link>
            <Link to={`/ComposeResearchPaper/${name}`}> <Box p="20px" _hover={{bg: "black", color: "white"}} >Create</Box></Link>
            <Link to={`/Mentors/${name}`}> <Box p="20px" _hover={{bg: "black", color: "white"}}>Mentors</Box></Link>
            <Link><Box mr="10px" p="20px" _hover={{bg: "black", color: "white"}}>Notifications</Box></Link>
         </Flex>
     </Box>
    </>
   );
 };


 export default Navbar;