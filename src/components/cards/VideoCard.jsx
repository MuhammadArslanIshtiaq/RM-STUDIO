import React from 'react';
import { Modal } from 'react-bootstrap';

const VideoCard = ({ src, poster }) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        centered
        contentClassName='bg-transparent'
        size='xl'
        show={show}
        onHide={handleClose}
      >
        <div>
          <video
            className='w-100 h-100'
            poster={poster}
            src={src}
            autoPlay='autoplay'
            playsInline=''
            loop='loop'
          />
        </div>
      </Modal>

      <div className='d-flex h-100 w-100'>
        <video
          onClick={handleShow}
          className='w-100 h-100'
          poster={poster}
          src={src}
          muted='muted'
          autoPlay='autoplay'
          playsInline=''
          loop='loop'
        />
      </div>
    </>
  );
};

export default VideoCard;
