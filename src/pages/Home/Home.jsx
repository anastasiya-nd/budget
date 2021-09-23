import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestSpendingsPendings } from '../../redux/actions';
import CategoryPopover from '../../components/CategoryPopover';
import LabelsPopover from '../../components/LabelsPopover';
import SpendingItem from '../../components/SpendingItem';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import PeriodPopover from '../../components/PeriodPopover';
import NewSpendingForm from '../../components/NewSpendingForm';
import { getSpendings, getPagination } from '../../redux/selectors';

const Home = () => {
  const [isOpenModal, toggleModal] = useState(false);

  const handleOpenModal = () => {
    toggleModal(true);
  };

  const handleCloseModal = () => {
    toggleModal(false);
  };

  const dispatch = useDispatch();

  const spendings = useSelector(getSpendings);
  const pagination = useSelector(getPagination);

  useEffect(() => {
    dispatch(requestSpendingsPendings(pagination.page, pagination.perPage));
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
        />
      ))}
    </section>
  );
};

export default Home;
