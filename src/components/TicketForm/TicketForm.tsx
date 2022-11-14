import React from 'react';
import { Button, TextField } from '@mui/material';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import styles from './TicketForm.module.css';
import {
  useAppDispatch,
  useAppSelector,
  changeFrom,
  changeTo,
  changeThere,
  changeBack,
} from 'store';

const TicketForm = () => {
  const { from, to, there, back } = useAppSelector((state) => state.ticket);
  const dispath = useAppDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      from,
      to,
      there,
      back,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { from, to, there, back } = data;

    dispath(changeFrom(from));
    dispath(changeTo(to));
    dispath(changeThere(there));
    dispath(changeBack(back));

    navigate('/avia/info');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.top}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="from">
            Откуда
          </label>
          <TextField
            type="text"
            id="from"
            className={styles.textField}
            size="small"
            placeholder="Город вылета"
            {...register('from', { required: true })}
          />
          {errors.from && <p className={styles.error}>Invalid data</p>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="to">
            Куда
          </label>
          <TextField
            type="text"
            id="to"
            className={styles.textField}
            size="small"
            placeholder="Город прилета"
            {...register('to', { required: true })}
          />
          {errors.to && <p className={styles.error}>Invalid data</p>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="there">
            Туда
          </label>
          <input
            type="date"
            id="there"
            className={styles.dataPicker}
            {...register('there', { required: true })}
          />
          {errors.there && <p className={styles.error}>Invalid data</p>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="back">
            Обратно
          </label>
          <input
            type="date"
            id="back"
            className={styles.dataPicker}
            {...register('back', { required: false })}
          />
          {errors.back && <p className={styles.error}>Invalid data</p>}
        </div>
      </div>
      <div className={styles.bottom}>
        <Button variant="contained" type="submit" disabled={!isValid}>
          Найти билеты
        </Button>
      </div>
    </form>
  );
};

export default TicketForm;
