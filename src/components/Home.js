import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom/cjs/react-router-dom";
 import { Formik } from 'formik';
 import * as Yup from 'yup';
 import { Text, Stack, HStack, VStack, Box, Img, Image } from '@chakra-ui/react'
 import { Textarea } from '@chakra-ui/react'
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
    console.log(name);
    const [loading, setLoading] = useState()
    const [researchTitle, setResearchTitle] = useState()
    const [researchBlog, setResearchBlog] = useState()
    const [researchName, setResearchName] = useState()
    useEffect(() => {
        const getBlog = async () => {
            try {
                 const res = await axios.get(`http://localhost:3300/api/research/${name}`)
                
                    console.log(res.data[0]);
                    setResearchTitle(res.data[0].research_research)
                    setResearchName(res.data[0].research_name)
                    setResearchBlog(res.data[0].research_title)
                    if(res){
                        setLoading(true);
                    }
               
                console.log(res);
            } catch (err) {
               console.log(err);
            }
        }
        getBlog()
    }, [])
   console.log(researchTitle);
    return (
    <>
   
   {loading?
     <>
      <Navbar name="name"/>
     <Box display="flex" w="100%" h="100%" justifyContent="center">
         <Flex mt="18px" flexDirection="column" justifyContent="space-between" borderRadius="7px" w="80%" h="25%" p="20px" border="1px solid silver" flexDir="column">
         <Text fontSize="29px">{researchTitle}</Text>
             <Text fontSize="20px"> {researchName}</Text>
             <Text fontSize="18px">{researchBlog.slice(0,250)} {researchBlog.length > 250?<Link>...ReadMore</Link>: null } </Text>
             
         </Flex>
     </Box>
     </>:
     <>
     <Navbar name={name}/>
     <Box display="flex" w="100%" h="100%" justifyContent="center">
     <Flex mt="18px" flexDirection="column" justifyContent="space-between" borderRadius="7px" w="80%" h="25%" p="20px" border="1px solid silver" flexDir="column">
      You Haven't started any Research Papers yet click the below button to get started
      <Link to={`/composeResearchPaper/${name}`}><Button colorScheme="blue">Create New</Button></Link>
            
     </Flex>
    </Box> 
    </>
    }
    
    </>
   );
 };


 export default Home;