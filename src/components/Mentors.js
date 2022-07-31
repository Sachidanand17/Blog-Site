import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
 import { Formik } from 'formik';
 import {useParams} from "react-router-dom/cjs/react-router-dom";
 import { Stack, HStack, VStack, Box, useStyles } from '@chakra-ui/react'
 import { Flex, Spacer } from '@chakra-ui/react'
 import { Input } from '@chakra-ui/react'
 import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { Button, ButtonGroup } from '@chakra-ui/react'
  import axios from "axios";
  import { Text } from '@chakra-ui/react'
  import { Link, Redirect } from 'react-router-dom';
 
 const Papers = () => {
    const {name} = useParams()

     const [loaading, setLoaading] = useState()
     const [daata, setDaata] = useState([])
    useEffect(() => {
        const getBlog = async () => {
            try {
                 const res = await axios.get(`http://localhost:3300/api/metors/${name}`)
                    if(res){
                        setLoaading(true);
                        setDaata(res.data)
                        console.log(res.data);
                    }
               
               
            } catch (err) {
               console.log(err);
            }
        }
        getBlog()
    }, [])
    console.log(daata);
   return (
       <>
         {loaading?
         <>
         <Navbar/>
        <Box mb="30px" display="flex" flexDir="column" w="100%" h="100hv" >
        
           {daata.map((element) => {
              return(
                  <>
                  <Flex mb="10px" alignSelf="center" ml="50px" mt="20px" flexDirection="column" justifyContent="space-between" borderRadius="7px" w="80%" h="25%" p="20px" border="1px solid silver" flexDir="column">
                   <Text fontSize="29px" fontWeight="700">{element.username}</Text>
                   <Text fontSize="18px" fontWeight="400">{element.email}</Text>
                   <Text fontSize="15px" fontWeight="300">{element.experties}</Text>
                   </Flex>
                  </>
              )
           })}
                
        
        </Box>
        </>:
        <div>Please Wait!!</div>
         }
       </>
   );
 };


 export default Papers;

