import style from './../../styles/ComponentStyles/FullAccount.module.css';
import { useForm } from 'react-hook-form';
import FormType from '../../types/FullAccountFormType';
import { Snackbar, Alert, Button, Select, MenuItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../AuthorizationData';
import { useAppDispatch } from '../../hooks/reducerHooks';
import { setFullAccount } from '../../Store/reducers/AccountStatusSlice';

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

    const dispatch = useAppDispatch();

    const onSubmit = (data: any) => {
        
        if (isValid) {
            setOpen(true);
        }
        const first_name: string = data.first_name;
        const last_name: string = data.last_name;
        const middle_name: string = data.middle_name;
        const region: string = data.region;
        const city: string = data.first_name;
        const school: string = data.school;
        const sex: string = data.sex;
        const grade: string = data.grade;
        const snils: string = data.snils;
        const date_birthday: string = data.date_birthday;
        const phone: string = data.phone;
        console.log(data);

        authAPI.FullAccount(first_name, last_name, middle_name, region, city, school, sex, grade, snils, date_birthday, phone);
        dispatch(setFullAccount());
        reset();
    }

    return (
        <section className={`${style.window} fullAccountWindow`}>
            <Button variant='text' color='secondary' onClick={goBack} className={style.backBtn}><ArrowBackIcon /> Назад</Button>
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
                           <Select style={{'width': 200, 'textAlign': 'center', 'color': 'white'}}  color='secondary' {...register('sex', {
                            required: 'Укажите ваш пол!'
                           })}>
                                <MenuItem value={'Мужской'}>Мужской</MenuItem>
                                <MenuItem value={'Женский'}>Женский</MenuItem>
                           </Select>
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
                        <div>
                            <label htmlFor="grade">Класс или курс обучения</label>
                            <input type="text" {...register('grade', {
                                required: 'Укажие класс или курс обучения!'
                            })}/>
                            {errors.grade && <section className={style.error}>{errors.grade.message}</section>}
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