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
  import axios from "axios";
  import { Text } from '@chakra-ui/react'
  import { Link, Redirect } from 'react-router-dom';
 
 const SignupAsMentor = () => {

    const [registered, setRegistered] = useState(false)
   return (
    
     <Formik
       initialValues={{ firstName: '', lastName: '', email: '', username:'', password:'', experties:''}}
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(75, 'Must be 75 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(60, 'Must be 60 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
         username: Yup.string()
           .max(30, 'Must be 30 characters or less')
           .required('Required'),
         password: Yup.string().required('Password is required'),
         experties:Yup.string()
         .max(100, 'Must be 100 characters or less')
         .required('Required'),
       })}
       onSubmit={ async (values) => {
         const mentors = {
             fname: values.firstName,
             lname: values.lastName,
             password: values.password,
             username: values.username,
             email: values.email,
             experties: values.experties
         }

         try{
             await axios
             .post("http://localhost:3300/api/mentorSignup", mentors)
             .then((res)=>{
                 console.log(res.data);
                 setRegistered(true)
             })

         }
         catch(err){
             console.log(err);
         }
       }}
     >
       {formik => (
           
          <Box
           mt="80px"
           height="650px"
           width="35%"
           border="1px solid silver"
           ml="34%"
           borderRadius="12px"
          >
          <Text textAlign="center" fontSize="20px"  >Register</Text>
         <form className='signUp' onSubmit={formik.handleSubmit}>
             <Flex 
             flexDir="column"
             justifyContent="space-around"
             m="auto"
             width="100%"
             height="100%"
             >
           
           
           <label htmlFor="firstName">First Name</label>
           <Input
             
             id="firstName"
             type="text"
             {...formik.getFieldProps('firstName')}
           />
           {formik.touched.firstName && formik.errors.firstName ? (
             <Box  color="red">{formik.errors.firstName}</Box>
           ) : null}
 
           <label htmlFor="lastName">Last Name</label>
           <Input
             id="lastName"
             type="text"
             {...formik.getFieldProps('lastName')}
           />
           {formik.touched.lastName && formik.errors.lastName ? (
             <Box color="red">{formik.errors.lastName}</Box>
           ) : null}
 
           <label htmlFor="email">Email Address</label>
           <Input id="email" type="email" {...formik.getFieldProps('email')} />
           {formik.touched.email && formik.errors.email ? (
             <Box color="red">{formik.errors.email}</Box>
           ) : null}

           <label htmlFor="usernmae">Username</label>
           <Input id="username" type="text" {...formik.getFieldProps('username')} />
           {formik.touched.username && formik.errors.username ? (
             <Box color="red">{formik.errors.username}</Box>
           ) : null}

           <label htmlFor="password">Password</label>
           <Input id="password" type="password" {...formik.getFieldProps('password')} />
           {formik.touched.password && formik.errors.password ? (
             <Box color="red">{formik.errors.password}</Box>
           ) : null}

           <label htmlFor="experties">Experties</label>
           <Input id="experties" type="experties" {...formik.getFieldProps('experties')} />
           {formik.touched.experties && formik.errors.experties ? (
             <Box color="red">{formik.errors.password}</Box>
           ) : null}

           {registered?<Redirect to="/login"/>: <>
                                    <Button  type="submit" colorScheme="blue"
                                            >Sign up
                                    </Button>
                                </>}
 
           
          
           </Flex>
         </form >
         </Box>
       
       )}
     </Formik>
   );
 };


 export default SignupAsMentor;