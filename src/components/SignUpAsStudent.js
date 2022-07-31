import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box } from '@chakra-ui/react'
import { Flex, } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button,  } from '@chakra-ui/react'
import axios from "axios";
import { Text } from '@chakra-ui/react'
import { Link, Redirect } from 'react-router-dom';
 
 const SignupAsStudent = () => {

  const [exist, setExist] = useState(true);
  const [foundStudent, setFoundStudent] = useState([])

  
    const [registeredStudent, setRegisteredStudent] = useState(false);


    

    
   return (

 
    
     <Formik
       initialValues={{ firstName: '', lastName: '', email: '', username:'', password:'', institutionName:''}}
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
         institutionName:Yup.string()
         .max(100, 'Must be 100 characters or less')
         .required('Required'),
       })}
       onSubmit={ async (values) => {
         const students = {
             fname: values.firstName,
             lname: values.lastName,
             password: values.password,
             username: values.username,
             email: values.email,
             institutionName: values.institutionName
         }

         const verify = {
           username: values.username
         }
         axios.get("http://localhost:3300/api/verifyStudent")
         .then((response)=>{
           console.log(response.data);

           const found = response.data;

           found.map((user) => {
             if(user.username === verify.username){
               setRegisteredStudent(false)
               setExist(false)
               console.log("this user already exist");
             } else{
               console.log("done verified");
             }
           
           })
           
         })
         
         axios
             .post("http://localhost:3300/api/studentSignup", students)
             .then((res)=>{
              setRegisteredStudent(true)
                 console.log(res.data);
                 setExist(true)   
             })

         
        
       }}
     >
       {formik => (
           
          <Box
           mt="80px"
          
           width="35%"
           border="1px solid silver"
           ml="34%"
           borderRadius="12px"
          >
          <Text textAlign="center" fontSize="20px"  >Register</Text>
         <form className='signUp' onSubmit={formik.handleSubmit}>
             <Flex 
             flexDir="column"
             
             m="auto"
             width="100%"
             height="100%"
             >
           
           
           <label htmlFor="firstName">First Name</label>
           <Input
             mb="10px"
             id="firstName"
             type="text"
             {...formik.getFieldProps('firstName')}
           />
           {formik.touched.firstName && formik.errors.firstName ? (
             <Box  color="red">{formik.errors.firstName}</Box>
           ) : null}
 
           <label htmlFor="lastName">Last Name</label>
           <Input
           mb="10px"
             id="lastName"
             type="text"
             {...formik.getFieldProps('lastName')}
           />
           {formik.touched.lastName && formik.errors.lastName ? (
             <Box color="red">{formik.errors.lastName}</Box>
           ) : null}
 
           <label htmlFor="email">Email Address</label>
           <Input mb="10px" id="email" type="email" {...formik.getFieldProps('email')} />
           {formik.touched.email && formik.errors.email ? (
             <Box color="red">{formik.errors.email}</Box>
           ) : null}

           <label htmlFor="usernmae">Username</label>
           <Input mb="10px" id="username" type="text" {...formik.getFieldProps('username')} />
           {formik.touched.username && formik.errors.username ? (
             <Box color="red">{formik.errors.username}</Box>
           ) : null}

           <label htmlFor="password">Password</label>
           <Input mb="10px" id="password" type="password" {...formik.getFieldProps('password')} />
           {formik.touched.password && formik.errors.password ? (
             <Box color="red">{formik.errors.password}</Box>
           ) : null}

           <label htmlFor="institutionName">InstitutionName</label>
           <Input mb="10px" id="institutionName" type="institutionName" {...formik.getFieldProps('institutionName')} />
           {formik.touched.institutionName && formik.errors.institutionName ? (
             <Box color="red">{formik.errors.password}</Box>
           ) : null}

           {registeredStudent?<Redirect to="/login"/>:null}
           { exist ? <><Button type='submit' >Submit</Button></> : <><Box>This User already exist</Box><Link to="/signupAsStudent"><Button onClick={()=>{setExist(true)}} type='submit'>Try Again</Button></Link></>}
         
           
          
           </Flex>
         </form >
         </Box>
       
       )}
     </Formik>
   );
 };


 export default SignupAsStudent;

