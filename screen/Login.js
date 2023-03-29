import React from 'react';
import { StatusBar } from 'expo-status-bar';

//formite
import { Formik, Field, Form } from "formik";

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea
} from './../component/style'

 const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/img2.png')} />
                <PageTitle>Smart House</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(value) => {
                        console.log(value);
                    }}
                >{() => (
                    <StyledFormArea>
                        
                    </StyledFormArea>
                )}
                    
                    
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
 }

 export default Login;