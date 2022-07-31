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
import Navbar from './Navbar';

 
 const Home = () => {

 const {name} = useParams()

   return (
    <>
     <Navbar/>
     <Flex pos="absolute" zIndex="-10" bg="#B9B1FE" width="100%" height="100%">
       <Flex zIndex="2" ml="80px" bgImage="url('./Group_1_1.png')"  margin="0" width="94.9%" height="100%" justifyContent="flex-end"> 
        <Link to="/ComposeResearchPaper" ><Button>CreateNew</Button></Link>
     </Flex>
    
         
         
         
     </Flex>
    </>
   );
 };


 export default Home;