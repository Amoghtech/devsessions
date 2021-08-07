import React from 'react';
import Input from '../Components/Input'
const LoginComp = () => {
    return (
        <div className="form_div">
            <h2>Login</h2>
            <form action="" onSubmit={submithandler}>
            <Input
            id="name"
            type="text"
            label="Name"
            element="input"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name"
            onInput={inputchangehandelr}
          />
          
            </form>
        </div>
    );
};

export default LoginComp;
