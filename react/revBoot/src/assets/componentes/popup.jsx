import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import img1 from '../imgs/aK6eW41_460s.jpg'
import img2 from '../imgs/download.jpg'
import img3 from '../imgs/images.jpg'

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
      veja seu resultado
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <marquee>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
          </marquee>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default OffCanvasExample