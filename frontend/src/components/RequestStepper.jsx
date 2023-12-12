import Stepper from "awesome-react-stepper";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarAlt, faCutlery } from '@fortawesome/free-solid-svg-icons';

import requirements from '../data/requirements.json';
import { useState } from "react";

export default function RequestStepper({onSubmit}) {
    const [category, setCategory] = useState('');
    const [values, setValues] = useState({
        fare: '',
        requirement: '',
        time: '09:30'
    });

    const valueOnChange = (event) => {
        setValues((previouData) => ({
            ...previouData,
            [event.target.name]: event.target.value,
          }));
    }

    const submit = () => {
        onSubmit({...values, category});
    }

    return (
        <Stepper submitBtn={<Button onClick={submit} className="defaultBtn">Submit</Button>}>
            <div className="stepper-form">
              {/* <_______________ category={category} onChange={setCategory} /> add the name of the function SelectCategory and uncomment it */}
            </div>
            <div className="stepper-form">
               {/* <________________ data={requirements} onChange={valueOnChange} value={values.requirement} /> */}
            </div>
            <div className="stepper-form">
                <div className="my-4">
                    <h6>Fare for the request</h6>
                    {/* <input placeholder="Enter price in (INR)" name="fare" onChange={valueOnChange} className="w-100" type="number" defaultValue={values.fare} id="fare"/> */}
                </div>
            </div>
            <div className="stepper-form">
                <div className="my-4">
                    <h6>Time</h6>
                    {/* <input placeholder="Time" name="time" onChange={valueOnChange} className="w-100" type="time" defaultValue={values.time} id="fare"/> */}
                </div>
            </div>
        </Stepper>
    )
}

function Requirements({data, value, onChange}) {
    return (
        <div className="my-4">
            <h6>Select requirement</h6>
            <select onChange={onChange} name="requirement" className="form-select">
                {data.map((option, index) => <option key={index} defaultChecked={option.value === value} value={option.value}>{option.label}</option>)}
            </select>
        </div>
    )
}

function SelectCategory({category, onChange}) {
    const valueOnChange = (event, type) => {
        if (event.target.value === 'on') {
            onChange(type);
        }
    }
    
    return (
        <div className="my-4">
            <h6>Choose category</h6>
            <div className="row justify-content-center mt-4">
                <div className="col-6 col-md-4">
                    <input id="delivery" onChange={(e) => valueOnChange(e, 'delivery')} className="d-none" name="category" defaultChecked={category === 'delivery'} type="checkbox"/>
                    <label htmlFor="delivery">
                        <Card className="bg-light">
                            <Card.Body>
                                <Card.Title className="text-center">Food delivery</Card.Title>
                                <Card.Subtitle className="my-2 text-muted text-center">
                                    <FontAwesomeIcon className="text-center" icon={faCutlery} style={{height: '50px'}} />
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </label>
                </div>

                <div className="col-6 col-md-4">
                    <input className="d-none" onChange={(e) => valueOnChange(e, 'drop')} name="category" defaultChecked={category === 'drop'} type="checkbox" id="drop"></input>
                    <label htmlFor="drop">
                        <Card className="bg-light">
                            <Card.Body>
                                <Card.Title className="text-center">Travel</Card.Title>
                                <Card.Subtitle className="my-2 text-muted text-center">
                                    <FontAwesomeIcon className="text-center" icon={faCarAlt} style={{height: '50px'}} />
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </label>
                </div>
            </div>
        </div>
    )
}