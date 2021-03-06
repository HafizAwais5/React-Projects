import { useState,useContext } from "react";

import './sign-up-form.style.scss';

import Button , {BUTTON_TYPE_CLASSES} from "../button/button.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}; 


const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const {displayName, email, password, confirmPassword} = formFields;


    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('passwords do not match');
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        }
        



        catch(err){

            if(err.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use');
            }
            else{
                console.log('user creation encounted an error', err);
            }
            }
    }

    const handleChange = (event) => {

        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <p>Sign Up with your Email </p>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email}/>
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password}/>
                <FormInput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                <Button type="submit">Sign Up</Button>
            
            </form>    
        </div>

    );
}

export default SignUpForm;

{
    /*
            It will also work
    return(
        <div>
            <h1>Sign Up with your Email and Password</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' 
                inputOptions = {{
                    type: 'text',
                    required: true,
                    onChange: handleChange,
                    name: 'displayName',
                    value: displayName,
                }}
                />

                <button type="submit">Sign Up</button>
            
            </form>    
        </div>

    ); */
}