import React from 'react';
import s from './contact.module.css'

const Contact = () => {
    // document.querySelector('form').addEventListener('submit', function(event) {
    //     event.preventDefault(); 
    //     console.log('Форма отправлена. Отмечаем это!');
    //   });
    return (
        <div className={s.contact}>
            <div className="container">
                <div className={s.contactContent}>
                    <div className={s.info}>
                        <div className={s.infoTop}>
                            <h2 className={s.title}>Контактная информация</h2>
                            <p className={s.text}>Оставьте свою заявку и наш менеджер свяжется с Вами для уточнения деталей.</p>
                        </div>
                        <div className={s.infoBottom}>
                            <p className={s.infoBottomF}>Звонок по России бесплатный</p>
                            <p className={s.infoBottomG}>8 800 550 48 32</p>
                            <p className={s.infoBottomF}>WhatsApp</p>
                            <p className={s.infoBottomG}>+7 (924) 420-24-32</p>
                            <p className={s.infoBottomF}>Офис</p>
                            <p className={s.infoBottomG}>г. Владивосток, ул. Тополевая 6</p>
                        </div>
                    </div>
                    <form action="" className={s.form} onSubmit={() => { alert("Форма отправлена") }}>
                        <div className={s.nameNumber}>
                            <div className={s.name}>
                                <label htmlFor="">Имя</label>
                                <input type="text" placeholder='Введите имя' required />
                            </div>
                            <div className={s.number}>
                                <label htmlFor="">Телефон</label>
                                <input type="tel" placeholder='+7' maxLength="12" minLength="12" required />
                            </div>
                        </div>
                        <div className={s.qustion}>
                            <label htmlFor="">Уточните свой вопрос</label>
                            <textarea name="" id="" cols="30" rows="10">
                                Введите текст сообщения, укажите страну, марку и год машины.
                            </textarea>
                        </div>
                        <div className={s.check}>
                            <input type="checkbox" required/>
                            <label htmlFor="">С правилами ознакомлен</label>
                        </div>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
