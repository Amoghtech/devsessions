import React from 'react';
import Input from '../Components/Input'
const LoginComp = () => {
    return (
        <div className="form_div">
            <h2>Login</h2>
            <form action="" onSubmit={submithandler}>
                <Input
                />
            </form>
        </div>
    );
};

export default LoginComp;
