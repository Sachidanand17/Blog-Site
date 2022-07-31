import React, { useState } from 'react';
 import { Formik } from 'formik';
 import * as Yup from 'yup';
 import { Text, Stack, HStack, VStack, Box, Img, Image } from '@chakra-ui/react'
 import { Textarea } from '@chakra-ui/react'
 import { Flex, Spacer } from '@chakra-ui/react'
 import { Input } from '@chakra-ui/react'
 import {useParams} from "react-router-dom/cjs/react-router-dom";
  import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

 
 const ComposeResearchPaper = () => {

    const [publish, setPublish] = useState(false)
    const {name} = useParams()


   return (
    <>
     <Navbar/>
    
     <Box  display="flex" alignItems="center" justifyContent="center" width="100%" h="100%" >
     
     <Formik width="100%"
       initialValues={{ title: '', name: name, blog: '' }}
       validationSchema={Yup.object({
         title: Yup.string()
           .max(100, 'Must be 15 characters or less')
           .required('Required'),
         name: Yup.string()
           .max(60, 'Must be 20 characters or less')
           .required('Required'),
         blog: Yup.string().required('Required'),
       })}
       onSubmit={ (values) => {
           const blog = {
               title: values.title,
               name: values.name,
               research: values.blog
           }
           try{
             axios
            .post("http://localhost:3300/api/createresearch", blog)
            .then((res)=>{
                if(res){
                    console.log(res);
                    setPublish(true);
                }
            })
           }
           catch(err){
               console.log(err);
               console.log(values);
               setPublish(false)
           }
         
       }}
     >
       {formik => (
         <Box  m="auto" w="85%" h="100%">
         
         <form className='composeForm' onSubmit={formik.handleSubmit}>
            <Flex w="100%"  alignItems="center" justifyContent="center" >
            <Flex borderRadius="7px" border="1px solid silver" p="20px" flexDir="column" mt="100px" justifyContent="center" w="60%" >
            <Text textAlign="center" mb="10px" fontWeight="600" fontSize="22px" >COMPOSE</Text>
           <label htmlFor="title">Title</label>
           <Input
             mt="10px"
             mb="10px"
             id="title"
             type="text"
             {...formik.getFieldProps('title')}
           />
           {formik.touched.title && formik.errors.title ? (
             <div>{formik.errors.title}</div>
           ) : null}
 
           <label htmlFor="name">Name</label>
           <Input
           disabled
            mt="10px"
            mb="10px"
             id="name"
             type="text"
             {...formik.getFieldProps('name')}
           />
           
 
           <label htmlFor="blog">Research</label>
           < Textarea  mt="10px" mb="10px" id="blog" type="" {...formik.getFieldProps('blog')} />
           {formik.touched.blog && formik.errors.blog ? (
             <Box>{formik.errors.blog}</Box>
           ) : null}


           {publish?<Redirect to={`/home/${name}`} />:<Button  mt="10px" mb="20px" colorScheme="blue" type="submit">Submit</Button>}
 

           </Flex>
           </Flex>
         
         </form>
         </Box>
       )}
     </Formik>
     </Box>
    </>
   );
 };


 export default ComposeResearchPaper;