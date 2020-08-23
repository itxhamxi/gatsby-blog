import React from 'react'
import {Button,Card,CardBody,CardTitle,Form,FormGroup,Input,} from 'reactstrap'

function Sidebar() {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3"> 
                        Newsletter
                    </CardTitle>
                    <Form className="text-center">
                        <FormGroup>
                            <Input type="email" name="email" placeholder="Your email address"/>
                        </FormGroup>
                        <Button ClassName="btn btn-outline-success text-uppercase">Subscribe</Button>
                    </Form>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase">
                        Advertisement
                    </CardTitle>
                    <img src="https://via.placeholder.com/320x200"alt="Advert" Style={{width:'100%'}}></img>
                </CardBody>
            </Card>
        </div>
    )
}

export default Sidebar
