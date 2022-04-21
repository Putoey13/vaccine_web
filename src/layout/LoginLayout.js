import React from 'react';
// import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {Outlet} from 'react-router-dom';
export class LoginLayout extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.main}>
                <ul className={classes.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className={classes.container}>
                    <Outlet />
                </div>
                {/* <div className={classes.container}>
                    
                    <div className={classes.content}>
                        <Outlet />
                    </div>
                </div> */}
            </div>
        )
    }
}

const useStyles = (theme) => ({ 
    main: {
        // position: 'fixed',
    },

    container: {   
        // width: '100vw',
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'flex-end',
        zIndex: '2',
    },

    content: { 
        width: '50vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '2',
    },

    background:{
        height: '100vh',
        width: '100vw'
    },
    circles:{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        // position: 'absolute',
        zIndex: '1',
        overflow: 'hidden',
        '& li':{
            position: 'absolute',
            display: 'block',
            listStyle: 'none',
            borderRadius: '50%',
            opacity: '50%',
        },
        '& li:nth-child(1)':{
            width: '20vw',
            height: '20vw',
            top: '5%',
            left: '80%',
            background: '#8DC7FD',
        },
        '& li:nth-child(2)':{
            width: '5vw',
            height: '5vw',
            top: '55%',
            left: '90%',
            background: '#999CF1',
        },
        '& li:nth-child(3)':{
            width: '35vw',
            height: '35vw',
            top: '75%',
            left: '75%',
            background: '#EBE7FF',
        },
        '& li:nth-child(4)':{
            width: '25vw',
            height: '25vw',
            top: '70%',
            left: '50%',
            background: '#B9FFE6',
        },
        '& li:nth-child(5)':{
            width: '25vw',
            height: '25vw',
            top: '90%',
            left: '15%',
            background: '#C1E9FF',
        },
        '& li:nth-child(6)':{
            width: '25vw',
            height: '25vw',
            top: '90%',
            left: '15%',
            background: '#E9B9FF',
        },
        '& li:nth-child(7)':{
            width: '27vw',
            height: '27vw',
            top: '60%',
            left: '-10%',
            background: '#E9CEFF',
        },
        '& li:nth-child(8)':{
            width: '35vw',
            height: '35vw',
            top: '-5%',
            left: '0%',
            background: '#B9FFBC',
        },
        '& li:nth-child(9)':{
            width: '20vw',
            height: '20vw',
            top: '0%',
            left: '40%',
            background: '#FCDBFF',
        },
        '& li:nth-child(10)':{
            width: '4vw',
            height: '4vw',
            top: '70%',
            left: '40%',
            background: '#C7E1FF',
        },
        '& li:nth-child(11)':{
            width: '15vw',
            height: '15vw',
            top: '30%',
            left: '35%',
            background: '#C8E1FE',
        },
    },
});
// export default withStyles(useStyles)(withRouter(LoginLayout));
export default withStyles(useStyles)(LoginLayout);
