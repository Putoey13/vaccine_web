import React, { useState,useEffect } from 'react';
import {withStyles} from '@material-ui/core';
import {Outlet} from 'react-router-dom';
import logo from '../assets/icon/logo.svg'
import userService from '../service/userService'
import Dropdown from 'react-bootstrap/Dropdown'
export class Vaccinelayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: null,
        };
        
    }

    async componentDidMount(){
        const response = await userService.findUser(Number(localStorage.getItem("userId")));
        const data = await response.data;
        console.log(data)
        this.setState({ loading: false, data });
    }

    render() {
        const {classes} = this.props;  
        const { data, loading } = this.state;
        if (loading) return <h2> </h2>;
        return (
            <div className={classes.container}>
                <div className={classes.logo}>
                    <img src={logo} height="75vh" onClick={clickLogo} className={classes.click}/>
                    <div className={classes.navItem}>
                        <Dropdown>
                            <Dropdown.Toggle className={classes.dropdown} id="dropdown-basic">
                                {data.firstname} {data.surname}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <Outlet />
            </div>
        )
        function clickLogo(){
        }
        function logout(){
            localStorage.clear();
            window.location = "/";
        }
    }
    
}
const useStyles = (theme) => ({
    container: { 
        width: '100vw',
        minHeight: '100vh',
        height: 'auto',
        backgroundImage: 'linear-gradient(to right, #E9F0F8 , #F0EDF4)',
        zIndex: '1',
        padding: '1% 0 0 0',
        zIndex: '1',
    },
    logo: {
        display: 'flex',
        justifyContent: 'center',
        zIndex: '2',
        marginTop: '10px',
    },
    click: {
        cursor: 'pointer',
    },
    navItem: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        right: '0',
        marginRight: '7vw',
        marginTop: '15px',
    },
    dropdown: {
        color: '#000000',
        background: '#FFFFFF',
        borderRadius: '42px',
        borderColor: '#FFFFFF',
    }
})
export default withStyles(useStyles)(Vaccinelayout);