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
  const [labels, setLabels] = useState([]);
  const [periodStart, setPeriodStart] = useState('');
  const [periodEnd, setPeriodEnd] = useState();
  const dispatch = useDispatch();
  const spendings = useSelector(getSpendings);
  const { page, perPage, total } = useSelector(getPagination);

  const handleChangePeriodStart = (date) => {
    setPeriodStart(date);
  };
  const handleChangePeriodEnd = (date) => {
    setPeriodEnd(date);
  };

  const setCategoryValue = (val) => {
    setCategory(val);
  };

  const setLabelsValue = (val) => {
    setLabels(val);
  };

  const handleOpenModal = () => {
    toggleModal(true);
  };

  const handleCloseModal = () => {
    toggleModal(false);
  };

  const onPageChange = (value) => {
    dispatch(
      requestSpendingsPending(value, perPage, category, labels.join(','), periodStart, periodEnd)
    );
  };

  const getSpendingValues = () => {
    dispatch(
      requestSpendingsPending(page, perPage, category, labels.join(','), periodStart, periodEnd)
    );
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
        <PeriodPopover
          periodStart={periodStart}
          periodEnd={periodEnd}
          handleChangePeriodStart={handleChangePeriodStart}
          handleChangePeriodEnd={handleChangePeriodEnd}
          getSpending={getSpendingValues}
        />
        <LabelsPopover labels={labels} setLabels={setLabelsValue} getSpending={getSpendingValues} />
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
