import React, { useState } from 'react';
 import { Formik } from 'formik';
 import * as Yup from 'yup';
 import { Stack, HStack, VStack, Box } from '@chakra-ui/react'
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
 
 const SignupForm = () => {

  const [login, setLogin] = useState(false)
  const [usrName, setUsrName] = useState()
  const [ermsg, setErmsg] = useState(true)

   return (
     <Formik
       initialValues={{ username: '', password: ''}}
       validationSchema={Yup.object({
         username: Yup.string()
           .max(40, 'Must be 15 characters or less')
           .required('Required'),
         password: Yup.string()
           .required('Required'),
       })}
       onSubmit={ async (values) => {
         let payload = {
           username: values.username,
           password: values.password
         }

         try{
          axios
          .post("http://localhost:3300/api/login", payload)
          .then((res)=>{
            if(res){
              console.log(res.data[0]);
              setUsrName(res.data[0].username)
 
            }
            if(res.data[0].username === payload.username && res.data[0].password === payload.password){
              console.log("correct");
              setLogin(true);
              setErmsg(true)
        
            }else{
              console.log("wromg");
              setLogin(false);
              setErmsg(false)
            }
           
            
        })

         }
         catch(err){
           console.log(err);
         }
         
        
       }}
     >
       {formik => (
          <Box
           mt="130px"
           height="400px"
           width="35%"
           border="1px solid black"
           ml="34%"
          >
         <form className='signUp' onSubmit={formik.handleSubmit}>
             <Flex 
             flexDir="column"
             justifyContent="space-around"
             m="auto"
             width="100%"
             height="100%"
             >
           
               
           <label htmlFor="username">Username</label>
           <Input
             
             id="username"
             type="text"
             {...formik.getFieldProps('username')}
           />
           {formik.touched.username && formik.errors.username ? (
             <Box  color="red">{formik.errors.username}</Box>
           ) : null}
 
           <label htmlFor="password">Password</label>
           <Input
             id="password"
             type="password"
             {...formik.getFieldProps('password')}
           />
           {formik.touched.password && formik.errors.password ? (
             <Box color="red">{formik.errors.password}</Box>
           ) : null}
 
           {login?<Redirect to={`/home/${usrName}`}  />: null}
           {ermsg?<Button type='submit'>Submit</Button>:<><Box>Wrong Username or password</Box><Button onClick={()=>{setErmsg(true)}} >Try Again</Button></>}
 
          
          
           </Flex>
         </form>
         </Box>
       
       )}
     </Formik>
   );
 };


 export default SignupForm;