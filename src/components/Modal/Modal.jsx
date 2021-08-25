import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import Close from '../Icons/Close';

const Modal = ({ isOpenModal, toggleIsOpenModal, title, children }) => {
  const node = useRef(null);

  const closeModal = () => {
    toggleIsOpenModal(false);
  };

  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        closeModal();
      }
    }

    const handleClickOutside = (e) => {
      if (node.current && !node.current.contains(e.target)) {
        toggleIsOpenModal(false);
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
    <Styled.Modal variant={isOpenModal}>
      <Styled.ModalContainer ref={node} variant={isOpenModal}>
        <Styled.ModalHeader>
          <div>{title}</div>
          <Styled.ButtonClose type="button" onClick={closeModal}>
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
  isOpenModal: PropTypes.bool.isRequired,
  toggleIsOpenModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
