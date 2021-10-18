import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestSpendingsPending, deleteSpendingPending } from '../../redux/actions';
import CategoryPopover from '../../components/CategoryPopover';
import LabelsPopover from '../../components/LabelsPopover';
import SpendingItem from '../../components/SpendingItem';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import PeriodPopover from '../../components/PeriodPopover';
import NewSpendingForm from '../../components/NewSpendingForm';
import { getSpendings, getPagination } from '../../redux/selectors';
import Pagination from '../../components/Pagination';
import * as Styled from './styles';

const Home = () => {
  const [isOpenModal, toggleModal] = useState(false);
  const [isOpenDeletingModal, toggleDeletingModal] = useState(false);
  const [spendingID, setSpendingID] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const spendings = useSelector(getSpendings);
  const { page, perPage, total } = useSelector(getPagination);

  const setCategoryValue = (val) => {
    setCategory(val);
  };

  const handleOpenModal = () => {
    toggleModal(true);
  };

  const handleCloseModal = () => {
    toggleModal(false);
  };

  const onPageChange = (value) => {
    dispatch(requestSpendingsPending(value, perPage, category));
  };

  const getSpendingValues = () => {
    dispatch(requestSpendingsPending(page, perPage, category));
  };

  const handleOpenDeletingModal = () => {
    toggleDeletingModal(true);
  };

  const handleCloseDeletingModal = () => {
    toggleDeletingModal(false);
  };

  const onDelete = (id) => {
    setSpendingID(id);
    handleOpenDeletingModal();
  };

  const deleteSpending = () => {
    dispatch(deleteSpendingPending(spendingID));
    handleCloseDeletingModal();
  };

  useEffect(() => {
    dispatch(requestSpendingsPending(page, perPage));
  }, []);

  console.log(category);

  return (
    <>
      {isOpenModal && (
        <Modal title="New spending" onClose={handleCloseModal}>
          <NewSpendingForm onClose={handleCloseModal} />
        </Modal>
      )}
      {isOpenDeletingModal && (
        <Modal title="Delete spending" onClose={handleCloseDeletingModal}>
          <Styled.ModalContent>
            <div>Are you sure you want to delete this entry?</div>
            <Styled.ModalButtonWrap>
              <Styled.ModalButton
                text="Close"
                variant="secondary"
                onClick={handleCloseDeletingModal}
              />
              <Styled.ModalButton text="Delete" variant="negative" onClick={deleteSpending} />
            </Styled.ModalButtonWrap>
          </Styled.ModalContent>
        </Modal>
      )}
      <section>
        <PeriodPopover />
        <LabelsPopover />
        <CategoryPopover
          categoryValue={category}
          setCategory={setCategoryValue}
          getSpendingValues={getSpendingValues}
        />
        <Button text="Add new spending +" onClick={handleOpenModal} />
        {spendings.map((s) => (
          <SpendingItem
            key={s._id} //eslint-disable-line
            id={s._id} //eslint-disable-line
            category={s.category}
            note={s.note}
            labels={s.labels}
            createdAt={s.createdAt}
            amount={s.amount}
            currency={s.currency}
            onDelete={onDelete}
          />
        ))}
        <Pagination currentPage={+page} total={total} onPageChange={onPageChange} />
      </section>
    </>
  );
};

export default Home;
