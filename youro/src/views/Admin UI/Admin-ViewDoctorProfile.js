import axios from 'axios';
import React, { useState, useRef, useMemo, useEffect, useCallback } from "react";
import { MaterialReactTable } from 'material-react-table';
import {
    Box,
    Typography,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    MenuItem,
    Stack,
    TextField,
    Container,
    Tooltip,
    Switch
} from '@mui/material';

import { Delete } from '@mui/icons-material';
// import "../../styles/Admin-ui/Admin-HomePage.css";
import { USER_TYPES } from '../../App';
import AdminSideBar from './Admin-SideBar';
import { Link } from 'react-router-dom';
import PreviousAppointments from '../Doctor UI/PreviousAppointments';
import IncompleteEncounters from '../Doctor UI/IncompleteEncounters';

const AdminViewDoctorProfile = () => {


    const TodayAppointmentList = (props) => {
        const [data, setData] = useState([]);

        useEffect(() => {

            const mockData = [
                { id: 1, name: 'John Doe', time: "9-sept,2023", patientstime: '4:30 am', diagnosisname: 'Diagnosis1', symptomscore: '10', meetup: 'new meet' },
                { id: 2, name: 'John Doe', time: "10-sept,2023", patientstime: '4:30 am', diagnosisname: 'Diagnosis2', symptomscore: '20', meetup: 'follow-up' },
                { id: 3, name: 'John Doe', time: "11-sept,2023", patientstime: '4:30 am', diagnosisname: 'Diagnosis3', symptomscore: '30', meetup: 'new meet' },
                { id: 4, name: 'John Doe', time: "12-sept,2023", patientstime: '4:30 am', diagnosisname: 'Diagnosis4', symptomscore: '40', meetup: 'follow-up' },
                { id: 5, name: 'John Doe', time: "13-sept,2023", patientstime: '4:30 am', diagnosisname: 'Diagnosis5', symptomscore: '50', meetup: 'follow-up' },
                { id: 6, name: 'John Doe', time: "14-sept,2023", patientstime: '4:30 am', diagnosisname: 'Diagnosis6', symptomscore: '60', meetup: 'new meet' },
                { id: 7, name: 'John Doe', time: "15-sept,2023", patientstime: '4:30 am', diagnosisname: 'Diagnosis7', symptomscore: '70', meetup: 'follow-up' },
                { id: 8, name: 'John Doe', time: "16-sept,2023", patientstime: '4:30 am', diagnosisname: 'Diagnosis8', symptomscore: '80', meetup: 'new meet' },
            ];

            setTimeout(() => {
                setData(mockData);
            }, 1000);
        }, []);

        return (
            <div>
                {data.map((item) => (
                    <div className='doctor-div'>
                        <div>
                            <h3 style={{ textDecoration: 'underline' }}>{item.name}</h3>
                        </div>
                        <ul key={item.id}>
                            <li>Date : {item.time}</li>
                            <li>Time : {item.patientstime}</li>
                            <li>Diagnosisname: {item.diagnosisname}</li>
                            <li>Symptom score: {item.symptomscore}</li>
                            <li>Meet-type: {item.meetup}</li>
                            {/* <p>{item.meetup}</p> */}
                        </ul>
                    </div>
                ))}
            </div>
        );
    };


    return (
        <div>
            <div className='hm'>
                <div className='sidebar'>
                    <AdminSideBar data={'admin-doctors'} />
                </div>
                <div className="admin-view-doctor-container" style={{width: '100%'}}>
                    <div className='admin-view-doctor-header'>
                    <div className='header'>
                                <h1 style={{marginLeft: '15px'}}>youro</h1>
                            </div>
                    </div>
                    <div className='admin-view-doctor-body'>
                        <div className='all-plans-patient'>
                            <div className='admin-details-view'>
                                <h2>Upcoming Appointments</h2>
                                <TodayAppointmentList/></div>
                            <div className='admin-details-view'>
                                <h2>Previous Appointments</h2>
                                <PreviousAppointments />
                            </div>
                            <div className='admin-details-view'>

                                <img  style={{margin: '15px auto 30px auto', borderRadius: '5px', display: 'block'}} src='https://demo.cherrytheme.com/gems/wp-content/uploads/2018/11/our-team-04.jpg' alt="Preview" width="150" height="150" />
                                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <div style={{width: '35%'}}>
                                        <p>First Name:</p>
                                        <p>Last Name:</p>
                                        <p>Email</p>
                                        <p>Mobile Number:</p><br />
                                        <p>License Number:</p><br />
                                        <p>Gender:</p>
                                        <p>Date of Birth:</p>
                                        <p>Address: </p>

                                    </div>
                                    <div style={{width: '60%'}}>
                                        <p><strong>Dr. Gulliame Farah</strong></p>
                                        <p><strong>XXXXXXXX</strong></p>
                                        <p><strong>Farah2000@gmail.com</strong></p>
                                        <p><strong>716-819-9000</strong></p><br />
                                        <p><strong>XXXXXXXX</strong></p><br />
                                        <p><strong>Male</strong></p>
                                        <p><strong>12/12/2000</strong></p>
                                        <p><strong>XXXXXXXXXXXXXXXX</strong></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

};

export default AdminViewDoctorProfile;
