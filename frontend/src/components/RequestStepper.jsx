import Stepper from "awesome-react-stepper";
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarAlt, faCutlery } from '@fortawesome/free-solid-svg-icons';

export default function RequestStepper() {
    return (
        <Stepper>
            <div className="my-4 stepper-form">
                <SelectCategory />
            </div>
            <div>
                <h1>Add your content here!!!</h1>
            </div>
            <div>
                <h1>Thank you for using Awesome React Stepper</h1>
            </div>
        </Stepper>
    )
}

function Requirements({data}) {}

function SelectCategory() {
    return (
        <>
            <h6>Choose category</h6>
            <div className="row justify-content-center mt-4">
                <div className="col-6 col-md-4">
                    <input id="delivery" className="d-none" type="checkbox"></input>
                    <label for="delivery">
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
                    <input className="d-none" type="checkbox" id="drop"></input>
                    <label for="drop">
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
        </>
    )
}