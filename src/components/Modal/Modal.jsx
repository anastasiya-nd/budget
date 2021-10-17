import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Close from '../Icons/Close';
import { useClickOutside } from '../../hooks/hooks';

const Modal = ({ onClose, title, children }) => {
  const node = useRef(null);

  useClickOutside(node, onClose);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        onClose();
      }
    }

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
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
