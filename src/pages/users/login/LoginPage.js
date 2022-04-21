import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/icon/logo.svg'
import userService from '../../../service/userService';

const LoginPage  = () => {
    const classes = useStyles();
    const [idcardno, setIdcardno] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.logo}>
                        <img src={logo} height="75vh"/>
                    </div>
                    <form onSubmit={onSubmit}>
                        <TextField type="idcardno" id="standard-basic" label="รหัสบัตรประชาชน" onChange={(e) => {setIdcardno(e.target.value);}} style={{width: '23vw'}}/> <br/>
                        <TextField type="password" id="standard-basic" label="Password" onChange={(e) => {setPassword(e.target.value);}} style={{width: '23vw', marginTop: '30px'}}/><br/>
                        <div style={{marginTop: '30px', display: 'flex', justifyContent: 'space-between'}}>
                            <div className={classes.buttonRegister} style={{marginRight: '4vw'}} onClick={register}>
                                ลงทะเบียนเพื่อจองวัคซีน
                            </div>
                            <button type="submit" className={classes.buttonSignin} onClick={onSubmit}>
                                เข้าสู่ระบบ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

    function register(){
        window.location = "/register";
    }
    async function onSubmit(event){
        event.preventDefault();
        let data = {
            idcardno: idcardno,
            password: password
        }
        const response = await userService.login(data)
        if(response.data.status == true){
            localStorage.setItem("userId", response.data.userId);
            window.location = "/dashboard";
        }
    }
}

const useStyles = makeStyles({
    logo: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '3vh',
        marginLeft: '-3vw',
    },
    buttonRegister:{
        cursor: 'pointer',
        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px', 
        lineHeight: '21px',
        paddingTop: '8px',

        color: '#1E7BE5',
    },
    buttonSignin:{
        cursor: 'pointer',
        background: '#5E5BD8',
        borderRadius: '30px',
        padding: '8px 33px 8px 33px',

        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '21px',
        color: 'white',
        borderStyle: 'unset',   
    
        '&:hover': {
            background: '#211e9c',
        }
    },
    container: {   
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-end',
        zIndex: '2',
    },

    content: { 
        width: '50vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: '3'
    },
});

export default LoginPage;
