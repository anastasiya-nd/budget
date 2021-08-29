import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Close from '../Icons/Close';

const Modal = ({ onClose, title, children }) => {
  const node = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        onClose();
      }
    }

    const handleClickOutside = (e) => {
      if (node.current && !node.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return ReactDOM.createPortal(
    <Styled.Modal>
      <Styled.ModalContainer ref={node}>
        <Styled.ModalHeader>
          <div>{title}</div>
          <Styled.ButtonClose type="button" onClick={onClose}>
            <Close />
          </Styled.ButtonClose>
        </Styled.ModalHeader>
        {children}
      </Styled.ModalContainer>
    </Styled.Modal>,
    document.body
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
