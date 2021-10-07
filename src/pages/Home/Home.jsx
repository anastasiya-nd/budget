import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestSpendingsPending } from '../../redux/actions';
import CategoryPopover from '../../components/CategoryPopover';
import LabelsPopover from '../../components/LabelsPopover';
import SpendingItem from '../../components/SpendingItem';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import PeriodPopover from '../../components/PeriodPopover';
import NewSpendingForm from '../../components/NewSpendingForm';
import { getSpendings, getPagination } from '../../redux/selectors';
import Pagination from '../../components/Pagination';

const Home = () => {
  const [isOpenModal, toggleModal] = useState(false);

  const dispatch = useDispatch();
  const spendings = useSelector(getSpendings);
  const { page, perPage, total } = useSelector(getPagination);

  const handleOpenModal = () => {
    toggleModal(true);
  };

  const handleCloseModal = () => {
    toggleModal(false);
  };

  const onPageChange = (value) => {
    dispatch(requestSpendingsPending(value, perPage));
  };

  useEffect(() => {
    dispatch(requestSpendingsPending(page, perPage));
  }, []);

  return (
    <section>
      <PeriodPopover />
      {isOpenModal && (
        <Modal title="New spending" onClose={handleCloseModal}>
          <NewSpendingForm onClose={handleCloseModal} />
        </Modal>
      )}

      <LabelsPopover />
      <CategoryPopover />
      <Button text="Add new spending +" onClick={handleOpenModal} />
      {spendings.map((s) => (
        <SpendingItem
          key={s._id} //eslint-disable-line
          category={s.category}
          note={s.note}
          labels={s.labels}
          createdAt={s.createdAt}
          amount={s.amount}
          currency={s.currency}
          id={s._id} //eslint-disable-line
        />
      ))}
      <Pagination currentPage={+page} total={total} onPageChange={onPageChange} />
    </section>
  );
};

export default Home;
