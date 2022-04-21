import React from 'react';
import {withStyles} from '@material-ui/core';
import {Outlet} from 'react-router-dom';
import logo from '../assets/icon/logo.svg'
export class Vaccinelayout extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.logo}>
                    <img src={logo} height="75vh" onClick={clickLogo} className={classes.click}/>
                </div>
                <Outlet />
            </div>
        )
        function clickLogo(){
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
    }
})
export default withStyles(useStyles)(Vaccinelayout);