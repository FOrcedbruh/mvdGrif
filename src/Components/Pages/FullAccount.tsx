import style from './../../styles/ComponentStyles/FullAccount.module.css';
import { useForm } from 'react-hook-form';
import FormType from '../../types/FullAccountFormType';
import { Snackbar, Alert, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const FullAccount: React.FC = () => {


    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm<FormType>({
        mode: 'onBlur'
    })


    // snackbar

    const [open, setOpen] = useState<boolean>(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    // навигация

    const navigate = useNavigate();

    const goBack = () => navigate(-1);


    //  отправка данных

    const onSubmit = (data: any) => {
        console.log(data);
        if (isValid) {
            setOpen(true);
        }
        reset();
    }

    return (
        <section className={`${style.window} fullAccountWindow`}>
            <Button variant='text' color='secondary' onClick={goBack} style={{'alignSelf': 'start', 'marginLeft': '40px'}}><ArrowBackIcon /> Назад</Button>
            <div className={style.formDiv}>
                <h3>Дополните ваш аккаунт</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section className={style.inputs}>
                        <div>
                            <label htmlFor="last_name">Фамилия</label>
                            <input type="text" {...register('last_name', {
                                required: 'Укажите фамилию!'
                            })}/>
                            {errors.last_name && <section className={style.error}>{errors.last_name.message}</section>}
                        </div>
                        <div>
                            <label htmlFor="first_name">Имя</label>
                            <input type="text" {...register('first_name', {
                                required: 'Укажите имя!'
                            })}/>
                            {errors.first_name && <section className={style.error}>{errors.first_name.message}</section>}
                        </div>
                        <div>
                            <label htmlFor="middle_name">Отчество</label>
                            <input type="text" {...register('middle_name', {
                                required: 'Укажите отчество!'
                            })}/>
                            {errors.middle_name && <section className={style.error}>{errors.middle_name.message}</section>}
                        </div>
                        <div>
                            <label htmlFor="phone">Номер телефона</label>
                            <input type="text" {...register('phone', {
                                required: 'Укажите номер телефона!'
                            })}/>
                            {errors.phone && <section className={style.error}>{errors.phone.message}</section>}
                        </div>
                        <div>
                            <label htmlFor="date_birthday">Дата рождения</label>
                            <input type="date" {...register('date_birthday', {
                                required: 'Укажите дату рождения!'
                            })}/>
                            {errors.date_birthday && <section className={style.error}>{errors.date_birthday.message}</section>}
                        </div>
                        <div>
                            <label htmlFor="sex">Ваш пол</label>
                            <input type="text" {...register('sex', {
                                required: 'Укажите ваш пол!'
                            })}/>
                            {errors.sex && <section className={style.error}>{errors.sex.message}</section>}
                        </div>
                        <div>
                            <label htmlFor="snils">СНИЛС</label>
                            <input type="text" {...register('snils', {
                                required: 'Укажите СНИЛС!'
                            })}/>
                            {errors.snils && <section className={style.error}>{errors.snils.message}</section>}
                        </div>
                        <div>
                            <label htmlFor="region">Регион</label>
                            <input type="text" {...register('region', {
                                required: 'Укажите регион!'
                            })}/>
                            {errors.region && <section className={style.error}>{errors.region.message}</section>}
                        </div>
                        <div>
                            <label htmlFor="city">Населенный пункт</label>
                            <input type="text" {...register('city', {
                                required: 'Укажите населенный пункт!'
                            })}/>
                            {errors.city && <section className={style.error}>{errors.city.message}</section>}
                        </div>
                        <div>
                            <label htmlFor="school">Полное наименование уч. заведения</label>
                            <input type="text" {...register('school', {
                                required: 'Укажите учебное заведение!'
                            })}/>
                            {errors.school && <section className={style.error}>{errors.school.message}</section>}
                        </div>
                    </section>
                    

                    <section className={style.Btn}>
                        <input type="submit" disabled={!isValid}  style={{'cursor': isValid ? 'pointer' : 'not-allowed'}} value={'Подтвердить изменения'}/>
                    </section>  
                    
                </form>
            </div>
            <Snackbar onClose={handleClose} open={open} autoHideDuration={4000}>
                <Alert severity='success'>
                    <p>Ваши данные отправлены успешно!</p>
                </Alert>
            </Snackbar>
        </section>
    )
}



export default FullAccount;