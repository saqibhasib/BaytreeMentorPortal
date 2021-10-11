import { useState } from "react";
import { reduxForm, Field } from 'redux-form'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import './QuestionnaireForm.css';

const ReduxFormInput: any = (field: any) => (
    <Form.Group className="mb-3">
        <Form.Label>{field.label}</Form.Label>
        <Form.Control 
          {...field.input}
          type="text" 
          placeholder={field.placeholder}
          isInvalid={field.meta.touched && field.meta.error}
          isValid={field.meta.touched && !field.meta.error} />
    </Form.Group>
  );

const QuestionnaireForm = () => {
   // const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('');

    const radios = [
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '4' },
        { name: '5', value: '5' },
      ];

    return (
    <Container>
    <Form>
    <h3>Mentoring Monthly Contact Form </h3>
    <hr />
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Mentee Name</Form.Label>
      <Form.Control type="text" placeholder="Ex: Jane Smith" />
      {/* <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text> */}
    </Form.Group>
    
    <h5>Practical Support</ h5>
    <Form.Group controlId="formPracticalSupport">
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee is engaging well with mentory sessions</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="sessionEngagement" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee arrives on time</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="punctuality" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee is willing to engage in activities</Form.Label>
            </Col>
            <Col md={3} lg={6}>
                <ToggleButtonGroup type="radio" name="activityEngagement" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            <br />
            </Col>
        </Row>
    </Form.Group>

    <h5>Social & Emotional Wellbeing</ h5>
    <Form.Group controlId="formWellbeing">
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee feels positive about herself</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="menteePositvity" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee conveys optimism about the future</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="menteeOptimism" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee demonstrates independent thinking</Form.Label>
            </Col>
            <Col md={3} lg={6}>
                <ToggleButtonGroup type="radio" name="menteeThinking" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            <br />
            </Col>
            <Col md={8} lg={6}>
                <Form.Label>My mentee makes her own mind up about things</Form.Label>
            </Col>
            <Col md={3} lg={6}>
                <ToggleButtonGroup type="radio" name="menteeIndividuality" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
    </Form.Group>
 
    <h5>Relationships, Friends and Family</ h5>
    <Form.Group controlId="formWellbeing">
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee speaks positively about friends</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="menteeFriendPositivity" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee sees friends regularly</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="menteeOptimism" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee has positive interations with family members</Form.Label>
            </Col>
            <Col md={3} lg={6}>
                <ToggleButtonGroup type="radio" name="menteeThinking" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            <br />
            </Col>
        </Row>
    </Form.Group>

    <h5>Acedmic Progress</ h5>
    <Form.Group controlId="formWellbeing">
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee enjoys learning</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="menteeFriendPositivity" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee makes an effort to complete her work</Form.Label>
            </Col>
            <Col md={3} lg={6}>
            <ToggleButtonGroup type="radio" name="menteeOptimism" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={8} lg={6}>
                <Form.Label>My mentee has positive attitude towards education</Form.Label>
            </Col>
            <Col md={3} lg={6}>
                <ToggleButtonGroup type="radio" name="menteeThinking" >
                    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary'>
                       1 
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary'>
                      2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
                      3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
                      4
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
                        5
                    </ToggleButton>
                </ToggleButtonGroup>
            <br />
            </Col>
        </Row>
    </Form.Group>


    <Button variant="primary" type="button">
      Submit
    </Button>
    
  </Form>
  </Container>
    )
}

export default reduxForm({
    form: 'monthly-questionnaire-form',
})(QuestionnaireForm);


/* <ToggleButtonGroup type="radio" name="radioO" >
    <ToggleButton id="tbg-radio-1" value={1} variant='outline-primary' className="toggle-button" >
       1 
    </ToggleButton>
    <ToggleButton id="tbg-radio-2" value={2} variant='outline-primary' className="toggle-button">
      2
    </ToggleButton>
    <ToggleButton id="tbg-radio-3" value={3} variant='outline-primary'>
      3
    </ToggleButton>
    <ToggleButton id="tbg-radio-3" value={4} variant='outline-primary'>
      4
    </ToggleButton>
    <ToggleButton id="tbg-radio-3" value={5} variant='outline-primary'>
      5
    </ToggleButton>
  </ToggleButtonGroup>
  <br /> */


//   <ToggleButtonGroup type="radio" name="radio" >
//   {radios.map((radio, idx) => (
//       <ToggleButton
//           className="toggle-button"
//           key={idx}
//           id={`radio-${idx}`}
//           variant={radioValue === radio.value ? (+radio.value < 3 ? 'danger':'primary') : 'outline-primary'}
//           value={radio.value}
//           checked={radioValue === radio.value}
//           onChange={(e) => setRadioValue(e.currentTarget.value)}
//           >
//           {radio.name}
//       </ToggleButton>
//   ))}
// </ToggleButtonGroup>