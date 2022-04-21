import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
 import userService from '../../../service/userService';
import * as ReactDOM from 'react-dom';
import VaccineDialog from '../../../component/VaccineDialog';
import Button from '@mui/material/Button';
import Moment from 'moment';
import VaccineOther from '../../../component/VaccineOther';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const DashboardPage  = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [openOther, setOpenOther] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        test();
    };
    const handleClickOpenOther = () => {
        setOpenOther(true);
    };
    const handleCloseOther = (value) => {
        setOpenOther(false);
        test();
    };
    useEffect( () => {
        test();
    }, []);

    return (
        <div className={classes.container}>
            {data.map((item, index) => {
                if(item.vaccine.vaccine === "covid-19"){
                    return(
                        <div className={classes.boxVaccine}>
                            <div className={classes.text}>
                                <span className={classes.font}>วัคซีนเข็มที่ {item.vaccineCount} </span><br />
                                <span className={classes.font2}>ชื่อวัคซีน</span> {item.vaccine.name} <br />
                                <span className={classes.font2}>วันที่จองวัตซีน</span> {Moment(item.createDate).format("DD/MM/YYYY")}<br />
                                <span className={classes.font2}>สถานที่</span> {item.hospital.name}<br />
                                <span className={classes.font2}>วันที่ได้รับวัคซีน</span> {Moment(item.date).format("DD/MM/YYYY")} <br />
                                <span className={classes.font2}>สถานะ</span><span
                                    align="center"
                                    style={{
                                        color:
                                        (item.status === "ได้รับวัคซีนแล้ว" &&
                                            "#09CF9E") ||
                                        (item.status === "ยังไม่ได้รับวัคซีน" &&
                                            "#E8302A"),
                                    }}
                                    >
                                    {item.status}
                                    </span>
                                </div>
                        </div>
                    );
                }else{
                    return(
                        <div className={classes.boxVaccine}>
                            <div className={classes.text}>
                                <span className={classes.font}>วัคซีนเข็มอื่นๆ</span><br />
                                <span className={classes.font2}>ชื่อวัคซีน</span> {item.vaccine.name} <br />
                                <span className={classes.font2}>วันที่ได้รับวัตซีน</span> {Moment(item.date).format("DD/MM/YYYY")}<br />
                                </div>
                        </div>
                    );
                }
            })}
            <div className={classes.groupButton}>
                <div className={classes.button} onClick={handleClickOpen}>วัคซีนโควิด-19</div>
                <div className={classes.button} onClick={handleClickOpenOther}>วัคซีนชนิดอื่นๆ</div>
            </div>

            <VaccineDialog
                open={open}
                onClose={handleClose}
            />
            <VaccineOther
                open={openOther}
                onClose={handleCloseOther}
            />
        </div>
    )
    
    async function test(){
        const response = await userService.getVaccine(Number(localStorage.getItem("userId")));
        setData(response.data)
    }
}

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2vh',
        flexDirection: 'column',
    },
    boxVaccine: {
        width: '80vw',
        background: '#FFFFFF',
        opacity: '1',
        borderRadius: '45px',
        padding: '20px 20px 20px 20px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: '10px',
        color: '#000000',
        textAlign: 'left',
        lineHeight: '33px',
    },
    text: {
        opacity: '1',
    },
    font: {
        fontWeight: 'bold',
        marginRight: '20px',
    },
    font2: {
        fontWeight: 'bold',
        margin: '0px 20px 0px 20px',
    },
    groupButton:{
        margin: '20px',
        display: 'flex',
        width: '80vw',
        justifyContent: 'flex-end',
    },
    button:{
        cursor: 'pointer',
        background: '#979797',
        borderRadius: '20px',
        padding: '8px 33px 8px 33px',
        color: '#FFFFFF',
        fontSize: '14px',
        lineHeight: '21px',
        color: 'white',
        borderStyle: 'unset',   
        marginLeft: '10px',
        '&:hover': {
            background: '#5E5BD8',
        }
    },
});

export default DashboardPage;
