import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IRegisterForm {
    email: string;
    password: string;
}

const Register = () => {
    const {
        register, // метод для регистрации вашего инпута, для дальнейшей работы с ним
        handleSubmit, // метод для получения данных формы, если валидация прошла успешна
        formState: { errors }, // errors - список ошибок валидации для всех полей формы
        reset // метод для очистки полей формы
    } = useForm<IRegisterForm>({
        mode: "onBlur", // парметр onBlur - отвечает за запуск валидации при не активном состоянии поля
    })

    const [credentials, setCredentials] = useState<IRegisterForm[]>([])

    const saveElement: SubmitHandler<IRegisterForm> = data => {
        setCredentials((prev) => [...prev, data]);
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(saveElement)}>
                <label htmlFor="email">Электронная почта</label>
                <br />
                <input
                    {...register('email', {
                        required: "Поле обязательно для заполнения",
                        pattern: 
                        {
                            value: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                            message: "Неправильный формат адреса электронной почты"
                        }
                    })
                    } />
                <div>{errors.email?.message}</div>
                <label htmlFor="password">Пароль</label>
                <br />
                <input
                    {...register('password', {
                        required: "Поле обязательно для заполнения",
                        minLength: {
                            value: 6,
                            message: "Пароль должен быть длиной в 6 символов или больше"
                        },
                        pattern: {
                            value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
                            message: "Пароль должен быть длиной в 6 или более символов, содержать минимум 1 строчную и 1 заглавную букву и 1 цифру без пробелов"
                        }
                    })
                    } />
                <div>{errors.password?.message}</div>
                <button type="submit">Отправить</button>
            </form>
            {
                credentials.map((data) =>
                    <p>
                        {data?.email} - {data?.password}
                    </p>
                )
            }
        </>
    );
}

export default Register;