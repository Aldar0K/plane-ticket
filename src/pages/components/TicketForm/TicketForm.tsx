import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import styles from './TicketForm.module.css';

const TicketForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<FieldValues>({
    mode: 'onSubmit',
    // reValidateMode: 'onChange',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    console.log('Переход!');
  };

  const isSubmitDisabled =
    !isDirty || !!errors.from || !!errors.to || !!errors.there || !!errors.back;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.top}>
        <div className={styles.field}>
          <label className={styles.label}>
            Откуда:
            <input
              type="text"
              placeholder="Город вылета"
              {...register('from', { required: true, minLength: 3, onChange: handleChange })}
            />
            {errors.from && <p className={styles.error}>Invalid data</p>}
          </label>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>
            Куда:
            <input
              type="text"
              placeholder="Город прилета"
              {...register('to', { required: true, minLength: 3, onChange: handleChange })}
            />
            {errors.to && <p className={styles.error}>Invalid data</p>}
          </label>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>
            Туда:
            <input type="date" {...register('there', { required: true, onChange: handleChange })} />
            {errors.there && <p className={styles.error}>Invalid data</p>}
          </label>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>
            Обратно:
            <input type="date" {...register('back', { required: true, onChange: handleChange })} />
            {errors.back && <p className={styles.error}>Invalid data</p>}
          </label>
        </div>
      </div>
      <div className={styles.bottom}>
        <button className={styles.submitButton} type="submit" disabled={isSubmitDisabled}>
          Найти билеты
        </button>
      </div>
    </form>
  );
};

export default TicketForm;
