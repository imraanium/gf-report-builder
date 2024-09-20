import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const InputForm = () => {
    return (
        <Form id='input-form'>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="John" />
        </Form.Group>
        <div className='mb-3'>
        <Form.Check
            type='checkbox'
            label="J'ai été ravie de faire votre connaissance lors de notre session d'aujourd'hui!"
            id='default-checkbox'
          />
        </div>
        
        <Form.Group className="mb-3" controlId="todayLesson">
          <Form.Label>Aujourd'hui, nous avons travaillé sur:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="achievement">
          <Form.Label>Vous avez pu:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Row>
        <Col lg='9'>
            <Form.Group className="mb-1" controlId="error">
              <Form.Label>Vous avez dit:</Form.Label>
              <Form.Control type="text" placeholder="Je aime apprendre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="correction">
              <Form.Label>Essayer de dire:</Form.Label>
              <Form.Control type="text" placeholder="J'aime apprendre" />
            </Form.Group>
        </Col>
        <Col lg='3' className='d-flex justify-content-center align-items-end'>
            <Button 
            type='button'
            variant='dark'
            className='input-form__correction-cta mb-3 w-100'
            onclick={() =>{}}
            aria-label="Input correction"
            >Insert</Button>
        </Col>
        </Row>
        <Row>
          <Col lg='9'>
          <Form.Group className="mb-3" controlId="vocabulary">
              <Form.Label>Vocabulaire:</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
          </Col>
          <Col lg='3' className='d-flex align-items-end'>
          <Button 
            type='button'
            variant='dark'
            className='input-form__vocabulary-cta mb-3 w-100'
            onclick={() =>{}}
            aria-label="Input vocabulary"
            >Insert</Button>
          </Col>
        
        </Row>
        

      </Form>
    )
}

export default InputForm;