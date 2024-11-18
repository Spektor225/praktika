import { useRef, useState } from "react"
import "./Style.css"

import { Bar } from "../Glodal/Global_item";
import { GlobalWindowZadanie2 } from "../Global_window_zadanie_2/Global_window_zadanie_2";

import img_1_1 from '../static/img/zadanie_1/Снимок экрана 2024-11-13 в 18.31.17.png'
import img_1_2 from '../static/img/zadanie_1/Снимок экрана 2024-11-13 в 18.47.57.png'

import img_2_1 from '../static/img/zadanie_2/Снимок экрана 2024-11-14 в 21.27.06.png'
import img_2_2 from '../static/img/zadanie_2/Снимок экрана 2024-11-14 в 21.27.20.png'

import img_3_1 from '../static/img/zadanie_3/Снимок экрана 2024-11-14 в 22.14.24.png'
import img_3_2 from '../static/img/zadanie_3/Снимок экрана 2024-11-14 в 22.14.47.png'

import img_4_1 from '../static/img/zadanie_4/Снимок экрана 2024-11-14 в 22.17.54.png'
import img_4_2 from '../static/img/zadanie_4/Снимок экрана 2024-11-14 в 22.18.01.png'

import img_5_1 from '../static/img/zadanie_5/Снимок экрана 2024-11-14 в 22.23.04.png'
import img_5_2 from '../static/img/zadanie_5/Снимок экрана 2024-11-14 в 22.23.18.png'

import img_6_1 from '../static/img/zadanie_6/Снимок экрана 2024-11-14 в 22.26.08.png'
import img_6_2 from '../static/img/zadanie_6/Снимок экрана 2024-11-14 в 22.26.24.png'

import img_7_1 from '../static/img/zadanie_7/Снимок экрана 2024-11-14 в 22.32.38.png'
import img_7_2 from '../static/img/zadanie_7/Снимок экрана 2024-11-14 в 22.32.55.png'
import img_7_3 from '../static/img/zadanie_7/Снимок экрана 2024-11-14 в 22.33.09.png'

import img_8_1 from '../static/img/zadanie_8/Снимок экрана 2024-11-14 в 22.37.30.png'
import img_8_2 from '../static/img/zadanie_8/Снимок экрана 2024-11-14 в 22.37.38.png'

import img_9_1 from '../static/img/zadanie_9/Снимок экрана 2024-11-14 в 22.43.59.png'
import img_9_2 from '../static/img/zadanie_9/Снимок экрана 2024-11-14 в 22.44.07.png'

import img_10_1 from '../static/img/zadanie_10/Снимок экрана 2024-11-14 в 22.47.09.png'


import img__2_1 from '../static/img/zad_2/Снимок экрана 2024-11-17 в 14.40.16.png'
import img__2_2 from '../static/img/zad_2/Снимок экрана 2024-11-16 в 19.32.37.png'
import img__2_3 from '../static/img/zad_2/Снимок экрана 2024-11-16 в 19.32.56.png'
import img__2_4 from '../static/img/zad_2/Снимок экрана 2024-11-16 в 19.33.04.png'
import img__2_5 from '../static/img/zad_2/Снимок экрана 2024-11-16 в 22.23.44.png'
import img__2_6 from '../static/img/zad_2/Снимок экрана 2024-11-16 в 22.23.52.png'
import img__2_7 from '../static/img/zad_2/Снимок экрана 2024-11-18 в 00.44.43.png'

import img__2_8 from '../static/img/zad_2/Снимок экрана 2024-11-18 в 01.43.00.png'
import img__2_9 from '../static/img/zad_2/Снимок экрана 2024-11-18 в 01.43.14.png'
import img__2_10 from '../static/img/zad_2/Снимок экрана 2024-11-18 в 01.43.30.png'
import img__2_11 from '../static/img/zad_2/Снимок экрана 2024-11-18 в 01.43.49.png'
import img__2_12 from '../static/img/zad_2/Снимок экрана 2024-11-18 в 01.44.07.png'
import img__2_13 from '../static/img/zad_2/Снимок экрана 2024-11-18 в 01.44.27.png'

import img__3_1 from '../static/img/zad_3/Снимок экрана 2024-11-18 в 02.21.39.png'







const arr_1 =
[
    {
        id: 1,
        name: 'Задача 1: Вывести числа от 1 до k в виде матрицы N x N слево напрово и сверху вниз.',

        table_identifier: [ ['k', 'int', 'Вводная'], ['s', 'int', 'Промежуточная'] ],
        uml: null,
        block_diagram: img_1_1,
        img_result: img_1_2,
    }
    ,
    {
        id: 2,
        name: `Задача 2: Определить класс Дробь в виде пары (т, п) с коэффициентами типа Комплексное число. Объявить и инициализировать массив из к дробей, вве-сти/вывести значения для массива дробей. Создать 
        массив/список/множест-во объектов и передать его в метод, который изменяет каждый элемент массива с четным индексом путем добавления следующего за ним элемента.`,

        table_identifier: null,
        uml: img_2_1,
        block_diagram: null,
        img_result: img_2_2,
    }
    ,
    {
        id: 3,
        name: `Задача 3: Новогодний подарок. Определить иерархию конфет и прочих сладостей. Создать несколько объектов-конфет. 
        Собрать детский подарок с определением его веса. Провести сортировку конфет в подарке на основе одного из параметров. Найти конфету в подарке, соответствующую заданному диапазону содержания сахара.`,

        table_identifier: null,
        uml: img_3_1,
        block_diagram: null,
        img_result: img_3_2,
    }
    ,
    {
        id: 4,
        name: `Задача 4: Создать класс Европа с внутренним классом, с помощью объектов которого можно хранить информацию об истории изменения территориального деления на государства.`,

        table_identifier: null,
        uml: img_4_1,
        block_diagram: null,
        img_result: img_4_2,
    }
    ,
    {
        id: 5,
        name: `Задача 5: Строка состоит из упорядоченных чисел от 0 до 100000, записанных подряд без пробелов. Определить, что будет подстрокой от позиции n до m.`,

        table_identifier: [ ['numberString', 'String', 'Промежуточная'], ['n, m', 'int', 'Входные'], ['subString', 'String', 'Выходная'] ],
        uml: null,
        block_diagram: img_5_1,
        img_result: img_5_2,
    }
    ,
    {
        id: 6,
        name: `Задача 6: Выполнить задания на основе задачи № 3, контролируя состояние потоков ввода/вывода. При возникновении ошибок, связанных с корректностью выполнения математических операций, 
        генерировать и обрабатывать исключительные ситуации. Предусмотреть обработку исключений, возникающих при нехватке памяти, отсутствии требуемой записи (объекта) в файле, недопустимом значении поля и т. д. 
        Выполнить задания из задачи № 3, реализуя собственные обработчики исключений и исключения ввода/вывода.`,

        table_identifier: null,
        uml: img_6_1,
        block_diagram: null,
        img_result: img_6_2,
    }
    ,
    {
        id: 7,
        name: `Задача 7: Написать программу рисующую содержимое рисунка.`,
        name_ing: img_7_1,

        table_identifier: null,
        uml: null,
        block_diagram: img_7_2,
        img_result: img_7_3,
    }
    ,
    {
        id: 8,
        name: `Задача 8: Составить программу для игры в шахматы. Здесь каждая шахматная фигура является отдельным объектом и характеризуется цветом, положением на доске, способом перемещения.`,

        table_identifier: null,
        uml: img_8_1,
        block_diagram: null,
        img_result: img_8_2,
    }
    ,
    {
        id: 9,
        name: `Задача 9: Итальянская игра «Математико». Имеется квадратное поле из 25 клеток и набор из 52 карточек, на которых записаны числа от 1 до 13, причем карточки с каждым из этих чисел встречаются по четыре раза.
        Разработать программу, которая позволит имитировать игру человека с компьютером: случайным образом извлекается какая-либо из имеющихся карточек и выдается записанное на ней число. Каждый игрок заносит это число в одну 
        из клеток квадрата, и так продолжается до тех пор, пока не будут заполнены все клетки квад-рата. Пример заполнения заданного поля показан на рис. 11. По окончании игры заполнение заполнение клеток поля оценивается 
        определенным количеством очков. Цель игры - разместить числа в клетках таким образом, чтобы набрать наибольшее количество очков в соответствии с табл. 3. Разработать для компьютера наиболее оптимальную стратегию заполнения квадрата.`,

        table_identifier: 
        [ 
            ['GRID_SIZE', 'int', 'Промежуточная'], 
            ['DECK_SIZE', 'int', 'Промежуточная'], 
            ['CARD_NUMBERS', 'int[]', 'Промежуточная'], 
            ['grid', 'int[][]', 'Промежуточная'], 
            ['deck', 'int[]', 'Промежуточная'], 
            ['random', 'Random', 'Промежуточная'], 
            ['buttons', 'JButton[][]', 'Промежуточная'], 
            ['scoreLabel', 'JLabel', 'Промежуточная'], 
        ],
        uml: null,
        block_diagram: img_9_1,
        img_result: img_9_2,
    }
    ,
    {
        id: 10,
        name: `Задача 10: Не используя арифметические команды реализовать оператор: N := N div 2`,

        table_identifier: null,
        uml: null,
        block_diagram: null,
        img_result: img_10_1,
    }
]



const arr_2_3_4 =
[
    {
        id: 2,
        name: '2 Разработка АИС (ЖКХ)',


        title_1: '2.1 ER-диаграмма, диаграмма вариантов использования, диаграмма последовательности, диаграмма взаимодействия АИС и пользователя',

        img_1: img__2_1,
        title_img_1: 'Рисунок 1 - ER-диаграмма',

        img_2: img__2_2,
        title_img_2: 'Рисунок 2 - Диаграмма вариантов использования',

        img_3: img__2_3,
        title_img_3: 'Рисунок 3 – Диаграмма последовательности',

        img_4: img__2_4,
        title_img_4: 'Рисунок 4 - Диаграмма взаимодействия АИС и пользователя',


        title_2: '2.2 Техническое задание',
        title_text_2: 
        `    Цель

    Разработать приложение для сотрудников предприятия, в котором можно будет удобно просматривать заявки на ремонт, обслуживание и другие работы, а также реагировать на них.

    Общее описание

    Описание предметной области
    Приложение должно быть ориентировано на сотрудников ЖКХ услуг

    Целевая аудитория

    Сотрудники управляющих компаний, которые являются клиентами компании заказчика

	Основные функциональные возможности приложения

 1. Авторизация пользователя
 2. Просмотр заявок («новых» и «в работе»)
 3. Принятие заявок в работу
 4. Смена пароля пользователя
 5. Смена темы приложения (светлая и темная)
 6. Увеличение и уменьшение шрифта внутри приложения

    Требования к ПО

    Язык программирования и среда разработки:

    Язык программирования: Python
    Среда разработки: PyCharm

    Фреймворки и библиотеки:

 1. FastApi
 2. PyQT5
 3. SQLAlchemy
 4. Alembic

    База данных и хранение данных

 1. СУБД: любая (предпочтительно PostgreSQL или MySQL)
 2. Хранение данных: чувствительные данные в базе должны храниться в захешированном виде (md5)

    Функциональные требования приложения

 1. Авторизация пользователя: пользователь должен иметь возможность зайти в приложение под своей учетной записью (учетную запись для сотрудника создает сама компания и выдает ему логин и пароль).
 2. Просмотр заявок: когда от жителей поступают заявки на ремонт (починка водопроводных труб, обслуживание электропроводки и т. д.) сотрудник ЖКХ должен увидеть это у себя в приложении, так же от должен видеть всю нужную ему информацию по этой заявке. Заявки делятся на 2 категории “Новые” и “В работе”. Заявки от пользователей попадают в категорию “Новые”, после чего сотрудник может принять их в работу, и она перемещается в категорию “В работе”
 3. Принятие заявок в работу: когда сотрудник увидел заявку в разделе «новые» он должен иметь возможность взять её в работу, после чего она переходит в раздел «в работе».
 4. Смена пароля пользователя: пользователь должен иметь способ поменять свой пароль для входа в приложение.
 5. Смена темы приложения: пользователь должен иметь возможность поменять цветовое оформления приложения (на светлую или темную тему)
 6. Увеличение и уменьшение шрифта внутри приложения: пользователь должен иметь возможность поменять размер шрифта приложения (сделать интерфейс крупнее или мельче)

    Технические требования для разработки приложения

    Интерфейс приложения

    Приложение должно иметь понятный и удобный интерфейс для пользователей, с возможностью взаимодействия через кнопки, жесты и клавиатуру.

    Поддерживаемые платформы

 1. Операционная система Windows (минимальная версия Windows: 10, минимальный объем ОЗУ: 4гб, минимальный объем основной памяти: 20гб)

    Безопасность данных

 1. Важно обеспечить безопасность и конфиденциальность данных пользователей, путем хеширования данных (md5)
 2. Все данные, отправляемые от пользователя в базу данных, также должны быть захешированы (md5)
 3. Использование HTTPS протокол для обмена данными между приложением и сервером компании для защиты передаваемой информации. 

    Тестирование и отладка

 1. Необходимо провести тестирование функциональности приложения на различных сценариях использования для выявления и устранения ошибок. 
 2. Провести тестирование на реальных пользователях и собрать от них рекомендации по исправлению.
 3. Также целесообразно разрабатывать приложение с учетом возможности логирования событий и ошибок для более эффективного контроля работы программы. Соблюдение данных технических требований поможет обеспечить стабильную работу приложения, высокий уровень безопасности и удобство использования для сотрудников.

    План разработки

    Этапы разработки 
 1. Настройка окружения разработки и установка необходимых библиотек. 
 2. Разработка дизайна приложения
 3. Разработка базы данных и необходимых процедур
 4. Разработка приложения
    4. 1. Создание графического интерфейса
    4. 2. Создание необходимых функций
 5. Тестирование
    5. 1. Ручное тестирование
    5. 2. Тестирование при помощи “бета тестеров”
    5. 3. Сбор информации от “бета тестеров”
 6. Выход приложения
    6. 1. Перенос базы данных на глобальный сервер
    6. 2. Сборка приложения

    Распределение задач 

 1. Настройка окружения разработки и установка необходимых библиотек - Frontend разработчик. 
 2. Разработка дизайна приложения - Графический дизайнер
 3. Разработка базы данных и необходимых процедур - Backend разработчик.
 4. Разработка приложения - Frontend разработчик.
 5. Тестирование - тестировщик
 6. Выход приложения
    6. 1. Перенос базы данных на глобальный сервер - Backend разработчик.
    6. 2. Сборка приложения - Frontend разработчик. 

    Временные рамки и график работ
    
 1. Настройка окружения и установка библиотек: 1 день. 
 2. Разработка дизайна: 1 неделю. 
 3. Разработка базы данных: 1 месяц. 
 4. Разработка приложения: 1 месяц.
 5. Тестирование: 1 неделю.
 6. Выход АИС: 1 неделю.

    В планах завершить разработку приложения в течение месяца, с учетом периодической проверки и обновления функциональности. Каждый этап разработки будет контролироваться руководителем проекта для соблюдения временных рамок и качества работы.`,


        title_3: '2.3 Тестирование',
        title_img_7: img__2_7,

        title_4: '2.4 Программная реализация АИС',
        
        img_5: img__2_5,
        title_img_5: 'Рисунок 5 - Окно авторизации',

        img_6: img__2_6,
        title_img_6: 'Рисунок 6 - Главное окно программы',


        title_5: '2.5 Руководство пользователя',
        title_text_5: 
        [
            `    Автоматизированная информационная система предназначена для управления заявками на оборудования ЖКХ. Система позволяет вести учет клиентов, заявок, доступного материала для ремонта и обрабатывать заявки на обслуживание.

    Начало работы

	Просмотр заявок
 1. Для просмотра заявок перейдите во вкладку “Заявки”.
 2. Нажмите “Оказание услуг”.
 3. После чего вы сможете посмотреть все заявки.`
            ,
            img__2_8
            ,
            `    Сортировка заявок
 1. Для сортировки заявок перейдите во вкладку “Заявки”.
 2. Нажмите “Оказание услуг”. 
 3. Далее нажмите на поле “Дата” или другое поле и выполните нужную вам сортировку.`
            ,
            img__2_9
            ,
            `    Поиск заявок
 1. Для поиска заявок перейдите во вкладку “Заявки”  
 2. Нажмите “Оказание услуг”
 3. Далее нажмите на интересующее для поиска столбец (дата, номер заявки, склад)
 4. Далее в поле “Поиск” введите интересующее вас значение`
            ,
            img__2_10
            ,
            `    Просмотр клиентов
 1. Для просмотра клиентов перейдите во вкладку “Заявки”.
 2. Нажмите “Клиенты”. 
 3. Теперь вам отобразиться весь список клиентов.`
            ,
            img__2_11
            ,
            `    Добавление клиентов
 1. Для добавления клиентов перейдите во вкладку “Заявки”.
 2. Нажмите “Клиенты”. 
 3. Далее нажмите на кнопку “Создать”. 
 4. Далее пополните имя вашего нового клиента (поле “Наименование”). Важно, что поле код заполняется автоматически.`
            ,
            img__2_12
            ,
            `    Просмотр остатков материалов:
 1. Для просмотра остатков материалов перейдите во вкладку “Учет материалов”
 2. Далее нажмите “Остатки материалов”`
            ,
            img__2_13
        ]
    }
    ,
    {
        id: 3,
        name: `    3 Разработка мобильного приложения

    Используемые языки программирования: Java

    Среда разработки: Android Studio

    Скриншот результата:`,
        img_1: img__3_1,
        title_img_1: 'Рисунок 1 - Скриншоты мобильного приложения',
    }
    ,
    {
        id: 4,
        name: `    4 Разработка сайта

    Используемые технологии:
 1. JavaScript
 2. CSS
 3. HTML
 4. React.js

    Среда разработки:
 1. VS Code

    Вы сейчас его просматриваете!`,
    }
]





export const GlobalWindowMain = () =>
{
    const [Visible, set_Visible] = useState(false)

    const [ActivitiView, set_ActivitiView] = useState("Main")
    const data = useRef(null)

    const [VisibleButtonBack, set_VisibleButtonBack] = useState(false)





    return(
        <>
            <Bar visibleButtonBack={VisibleButtonBack} onClick_ButtonBack={ () => {set_ActivitiView("Main"); set_VisibleButtonBack(!VisibleButtonBack)} }/>



            {
                ActivitiView === "Main" ?
                <div className="container">
                    
                    <label className="mt_15_pr text_50 animation_start_split">Учебная практика</label>
                    <label className="mb_5_pr text_50 animation_start_split">Чернышов Вадим ИСп 21-1</label>


                    <>
                        <div className="vkladka animation_left_split" onClick={ () => set_Visible(!Visible) }>
                            <label className="text_20">Задание 1: Решение задач</label>
                        </div>

                        {
                            Visible &&
                            arr_1.map(
                                (i) =>
                                <div key={i.id} className="optional_vkladka" onClick={ () => {set_VisibleButtonBack(!VisibleButtonBack); set_ActivitiView("GlobalWindowZadanie1"); data.current = i} }>
                                    <label className="text_20">Задача {i.id}</label>
                                </div>
                            )
                        }
                    </>
                    
                    <div className="vkladka animation_ringt_split" onClick={ () => {set_VisibleButtonBack(!VisibleButtonBack); set_ActivitiView("GlobalWindowZadanie2"); data.current = arr_2_3_4[0]} }>
                        <label className="text_20">Задание 2: Создание АИС (ЖКХ)</label>
                    </div>

                    <div className="vkladka animation_left_split" onClick={ () => {set_VisibleButtonBack(!VisibleButtonBack); set_ActivitiView("GlobalWindowZadanie2"); data.current = arr_2_3_4[1]} }>
                        <label className="text_20">Задание 3: Разработка мобильного приложения</label>
                    </div>

                    <div className="vkladka animation_ringt_split" onClick={ () => {set_VisibleButtonBack(!VisibleButtonBack); set_ActivitiView("GlobalWindowZadanie2"); data.current = arr_2_3_4[2]} }>
                        <label className="text_20">Задание 4: Создание сайта</label>
                    </div>

                </div>   

                : ActivitiView === "GlobalWindowZadanie1" ?
                <GlobalWindowZadanie data={data.current}/>

                : ActivitiView === "GlobalWindowZadanie2" ?
                <GlobalWindowZadanie2 data={data.current}/>

                :
                <div></div>
            }
            

            
            {/* {
                ActivitiView === "WindowMain" &&
                <GlobalWindowZadanie data={data.current} className={ActivitiView === "GlobalWindowZadanie2" ? "visible" : "hidden"}/>
            }


            
            {
                ActivitiView === "GlobalWindowZadanie2" &&
                <GlobalWindowZadanie2 data={data.current} className={ActivitiView === "GlobalWindowZadanie2" ? "visible" : "hidden"}/>
            } */}
        </>
        
    )
}




const GlobalWindowZadanie = (props) =>
{
    const [data, set_data] = useState(props.data)


    return(
        <div className="zadanie_view">

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label className="text_20 mt_10_pr">{data.name}</label>
                {
                    data.name_ing &&
                    <div><img src={data.name_ing} alt="???" width='300'/></div>
                }

                <label className="text_20 mt_50_px">Код программы:</label>
                <CodeView id={data.id}/>    
            </div>
            
            
            {
                data.table_identifier &&
                <table className="text_20 mt_50_px">
                    <caption>Таблица идентификаторов</caption>
                    <tr>
                        <th>Переменная</th>
                        <th>Тип</th>
                        <th>Предназначение</th>
                    </tr>
                    {
                        data.table_identifier.map(
                            (arr_item, index) =>
                            <tr key={index}>
                                {
                                    arr_item.map(
                                        (item, index) =>
                                        <td key={index}>{item}</td>
                                    )
                                }
                            </tr>
                        )
                    }
                </table>    
            }
            

            {
                data.uml &&
                <>
                    <label className="text_20 mt_50_px">UML-диаграмма</label>
                    <img src={data.uml} alt="???" width='300'/>    
                </>
            }
            

            {
                data.block_diagram &&
                <>
                    <label className="text_20 mt_50_px">Блок-схема</label>
                    <img src={data.block_diagram} alt="???" width='300'/>
                </>
            }
            

            <label className="text_20 mt_50_px">Скриншот результата</label>
            <img src={data.img_result} alt="???" width='300'/>

        </div>
    )
}




const CodeView = ({id}) =>
{
    return(
        <>
            {
                id === 1 ?
                <pre className="text_20">
                    {
`import java.util.Scanner;
public class Main_1
{
    public static void main(String[] args)
    {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Введите Число k: ");
        int k = scanner.nextInt();
        int s = (int) Math.ceil( Math.sqrt(k) );
        for(int i=1; i<=k; i++)
        {
            if( i%s == 0 ) System.out.println(i);
            else System.out.print(i + ", ");
        }
    }
}`
                    }    
                </pre> 

                : id === 2 ?
                <pre className="text_20">
                    {
`import java.util.*;
class Fraction
{
   Complex m;
   Complex n;
   public Fraction(Complex m, Complex n)
   {
       this.m = m;
       this.n = n;
   }
   @Override
   public String toString()
   {
       return "(" + m + ", " + n + ")";
   }
}
class Complex
{
   double real;
   double imag;

   public Complex(double real, double imag)
   {
       this.real = real;
       this.imag = imag;
   }
   public Complex add(Complex other)
   {
       return new Complex(this.real + other.real, this.imag + other.imag);
   }
   @Override
   public String toString()
   {
       if (imag >= 0) {
           return real + " + " + imag + "i";
       } else {
           return real + " - " + (-imag) + "i";
       }
   }
}
public class Main_2
{
   public static void main(String[] args)
   {
       Scanner scanner = new Scanner(System.in);
       System.out.print("Введите количество дробей (k): ");
       int k = scanner.nextInt();
       Fraction[] fractions = new Fraction[k];
       for (int i = 0; i < k; i++)
       {
           System.out.print("Введите числитель дроби " + (i + 1) + " (реальная, мнимая): ");
           double realM = scanner.nextDouble();
           double imagM = scanner.nextDouble();
           System.out.print("Введите знаменатель дроби " + (i + 1) + " (реальная, мнимая): ");
           double realN = scanner.nextDouble();
           double imagN = scanner.nextDouble();
           fractions[i] = new Fraction(new Complex(realM, imagM), new Complex(realN, imagN));
       }
       System.out.println("Массив дробей:");
       for (Fraction fraction : fractions)
       {
           System.out.println(fraction);
       }
       modifyFractions(fractions);
       System.out.println("Измененный массив дробей:");
       for (Fraction fraction : fractions)
       {
           System.out.println(fraction);
       }
   }
   public static void modifyFractions(Fraction[] fractions)
   {
       for (int i = 0; i < fractions.length - 1; i += 2)
       {
           fractions[i].m = fractions[i].m.add(fractions[i + 1].m);
           fractions[i].n = fractions[i].n.add(fractions[i + 1].n);
       }
   }
}`
                    }
                </pre>

                : id === 3 ?
                <pre className="text_20">
                    {
`package org.example;
import java.util.*;
class Candy
{
   protected int sugarContent;
   protected double weight;
   protected String brand;
   public Candy(int sugarContent, double weight, String brand) {
       this.sugarContent = sugarContent;
       this.weight = weight;
       this.brand = brand;
   }
   public int getSugarContent() {
       return sugarContent;
   }
   public double getWeight() {
       return weight;
   }
   public String getBrand() {
       return brand;
   }
}
class Chocolate extends Candy {
   public Chocolate(int sugarContent, double weight) {
       super(sugarContent, weight, "Chocolate");
   }
}
class Caramel extends Candy {
   public Caramel(int sugarContent, double weight) {
       super(sugarContent, weight, "Caramel");
   }
}
class JellyBean extends Candy {
   public JellyBean(int sugarContent, double weight) {
       super(sugarContent, weight, "Jelly Bean");
   }
}
class Gift {
   Candy[] candies;
   public Gift(Candy[] candies) {
       this.candies = candies;
   }
   public double getTotalWeight() {
       double totalWeight = 0;
       for (Candy candy : candies) {
           totalWeight += candy.getWeight();
       }
       return totalWeight;
   }
   public void  sortByWeight() {
       Arrays.sort(candies, Comparator.comparingDouble(Candy::getWeight));
   }
   public List<Candy> getCandiesBySugarRange(int minSugar, int maxSugar) {
       List<Candy> filteredCandies = new ArrayList<>();
       for (Candy candy : candies) {
           if (candy.getSugarContent() >= minSugar && candy.getSugarContent() <= maxSugar) {
               filteredCandies.add(candy);
           }
       }
       return filteredCandies;
   }
}
public class Main_3 {
   public static void main(String[] args) {
       Candy[] candies = {
               new Chocolate(50, 10),
               new Caramel(70, 15),
               new JellyBean(30, 5),
               new Chocolate(60, 12),
               new Caramel(40, 8)
       };
       Gift gift = new Gift(candies);
       System.out.println("Подарок весит: " + gift.getTotalWeight() + "г");
       gift.sortByWeight();
       System.out.println("\nСортировка конфет в подарке по весу:");
       for (Candy candy : gift.candies) {
           System.out.println(candy.getBrand() + ": " + candy.getWeight() + "г");
       }
       System.out.println("\nУкажите диапозон содержания сахара:");
       Scanner scanner = new Scanner(System.in);
       List<Candy> sugarFilteredCandies = gift.getCandiesBySugarRange( scanner.nextInt(), scanner.nextInt() );
       for (Candy candy : sugarFilteredCandies) {
           System.out.println(candy.getBrand() + ": " + candy.getSugarContent() + "%");
       }
   }
}`
                    }
                </pre>

                : id === 4 ?
                <pre className="text_20">
                    {
`package org.example;
import java.util.ArrayList;
import java.util.List;
class Europa {
   private class HistoricalState {
       private String name;
       private int year;
       public HistoricalState(String name, int year) {
           this.name = name;
           this.year = year;
       }
       public String getName() {
           return name;
       }
       public int getYear() {
           return year;
       }
   }
   private List<HistoricalState> historicalStates = new ArrayList<>();
   public void addHistoricalState(String name, int year) {
       historicalStates.add(new HistoricalState(name, year));
   }
   public void printHistory() {
       System.out.println("История территориального деления Европы:");
       for (HistoricalState state : historicalStates) {
           System.out.println(state.getYear() + ": " + state.getName());
       }
   }
}
public class Main_4 {
   public static void main(String[] args) {
       Europa europa = new Europa();
       europa.addHistoricalState("Римская империя", -27);
       europa.addHistoricalState("Франкская империя", 481);
       europa.addHistoricalState("Священная Римская империя", 962);
       europa.addHistoricalState("Франция", 987);
       europa.addHistoricalState("Великобритания", 1707);
       europa.printHistory();
   }
}`
                    }
                </pre>

                : id === 5 ?
                <pre className="text_20">
                    {
                        `package org.example;
import java.util.Scanner;
public class Main_5
{
   public static void main(String[] args) {
       String numberString = "";
       for (int i=0; i<=100000; i++)
       {
           numberString = numberString + i;
       }
       Scanner scanner = new Scanner(System.in);
       int n = scanner.nextInt();
       int m = scanner.nextInt();
       String subString = numberString.substring(n, m);
       System.out.println("Подстрока от позиции " + n + " до " + m + ": " + subString);
   }
}`
                    }
                </pre>

                : id === 6 ?
                <pre className="text_20">
                    {
                        `package org.example;
import java.util.*;
class Candy_1 {
   protected int sugarContent;
   protected double weight;
   protected String brand;
   public Candy_1(int sugarContent, double weight, String brand) {
       this.sugarContent = sugarContent;
       this.weight = weight;
       this.brand = brand;
   }
   public int getSugarContent() {
       return sugarContent;
   }
   public double getWeight() {
       return weight;
   }
   public String getBrand() {
       return brand;
   }
}
class Chocolate_1 extends Candy {
   public Chocolate_1(int sugarContent, double weight) {
       super(sugarContent, weight, "Chocolate");
   }
}
class Caramel_1 extends Candy {
   public Caramel_1(int sugarContent, double weight) {
       super(sugarContent, weight, "Caramel");
   }
}
class JellyBean_1 extends Candy {
   public JellyBean_1(int sugarContent, double weight) {
       super(sugarContent, weight, "Jelly Bean");
   }
}
class Gift_1 {
   Candy[] candies;
   public Gift_1(Candy[] candies) {
       this.candies = candies;
   }
   public double getTotalWeight() {
       double totalWeight = 0;
       for (Candy candy : candies) {
           totalWeight += candy.getWeight();
       }
       return totalWeight;
   }
   public void sortByWeight() {
       Arrays.sort(candies, Comparator.comparingDouble(Candy::getWeight));
   }
   public List<Candy> getCandiesBySugarRange(int minSugar, int maxSugar) {
       List<Candy> filteredCandies = new ArrayList<>();
       for (Candy candy : candies) {
           if (candy.getSugarContent() >= minSugar && candy.getSugarContent() <= maxSugar) {
               filteredCandies.add(candy);
           }
       }
       return filteredCandies;
   }
}
public class Main_6 {
   public static void main(String[] args) {
       Candy[] candies = {
               new Chocolate_1(53, 10.3),
               new Caramel_1(79, 15.9),
               new JellyBean_1(28, 5.8),
               new Chocolate_1(55, 12.7),
               new Caramel_1(40, 9)
       };
       Gift_1 gift = new Gift_1(candies);
       System.out.println("Подарок весит: " + gift.getTotalWeight() + "г");
       gift.sortByWeight();
       System.out.println("\nСортировка конфет в подарке по весу:");
       for (Candy candy : gift.candies) {
           System.out.println(candy.getBrand() + ": " + candy.getWeight() + "г");
       }
       System.out.println("\nУкажите диапазон содержания сахара:");
       Scanner scanner = new Scanner(System.in);
       List<Candy> sugarFilteredCandies = new ArrayList<>();
       while (true) {
           try {
               int minSugar = scanner.nextInt();
               int maxSugar = scanner.nextInt();
               // Проверка на переполнение типа данных
               if (minSugar < 0 || maxSugar < 0 || minSugar > 100 || maxSugar > 100) {
                   throw new IllegalArgumentException("Диапазон содержания сахара должен быть от 0 до 100");
               }
               sugarFilteredCandies = gift.getCandiesBySugarRange(minSugar, maxSugar);
               break; // Выход из цикла, если ввод корректный
           } catch (InputMismatchException e) {
               System.out.println("Ошибка: Введите целые числа.");
               scanner.nextLine(); // Очистка буфера ввода
           } catch (IllegalArgumentException e) {
               System.out.println(e.getMessage());
           }
       }
       for (Candy candy : sugarFilteredCandies) {
           System.out.println(candy.getBrand() + ": " + candy.getSugarContent() + "%");
       }
   }
}`
                    }
                </pre>

                : id === 7 ?
                <pre className="text_20">
                    {
                        `package org.example;
import javax.swing.*;
import java.awt.*;
import java.awt.geom.Ellipse2D;
import java.awt.geom.Line2D;
public class Main_7 extends JFrame {
   public Main_7() {
       setTitle("Теннисная ракетка и воланчик");
       setSize(300, 300);
       setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
       setLocationRelativeTo(null);
       add(new CirclePanel());
       setVisible(true);
   }
   private static class CirclePanel extends JPanel {
       @Override
       protected void paintComponent(Graphics g) {
           super.paintComponent(g);
           Graphics2D g2d = (Graphics2D) g;
           g2d.setStroke(new BasicStroke(10));
           Ellipse2D.Double circle = new Ellipse2D.Double(90, 50, 100, 100);
           g2d.draw(circle);
           Line2D.Double line = new Line2D.Double(140, 150, 140, 300); // Линия от (50, 150) до (200, 150)
           g2d.draw(line);
           Ellipse2D.Double filledCircle = new Ellipse2D.Double(50, 250, 50, 50);
           g2d.setColor(Color.BLACK); // Устанавливаем черный цвет
           g2d.fill(filledCircle); // Заполняем круг черным цветом
       }
   }
   public static void main(String[] args) {
       SwingUtilities.invokeLater(() -> new Main_7());
   }
}`
                    }
                </pre>

                : id === 8 ?
                <pre className="text_20">
                    {
                        `package org.example;
import javax.swing.*;
import java.awt.*;
abstract class Piece {
   String name;
   String color;
   public Piece(String name, String color) {
       this.name = name;
       this.color = color;
   }
   public abstract boolean isValidMove(int startX, int startY, int endX, int endY);
}
class Pawn extends Piece {
   public Pawn(String color) {
       super("Pawn", color);
   }
   @Override
   public boolean isValidMove(int startX, int startY, int endX, int endY) {
       int direction = color.equals("white") ? -1 : 1; // Направление движения
       if (startX == endX) {
           // Движение на одну клетку вперед или две клетки на начальной позиции
           return (endY == startY + direction) || (startY == (color.equals("white") ? 6 : 1) && endY == startY + 2 * direction);
       }
       // Удар по диагонали
       return (Math.abs(startX - endX) == 1 && endY == startY + direction);
   }
}
class Rook extends Piece {
   public Rook(String color) {
       super("Rook", color);
   }
   @Override
   public boolean isValidMove(int startX, int startY, int endX, int endY) {
       return (startX == endX || startY == endY); // Ладья движется по прямой
   }
}
class Knight extends Piece {
   public Knight(String color) {
       super("Knight", color);
   }
   @Override
   public boolean isValidMove(int startX, int startY, int endX, int endY) {
       return (Math.abs(startX - endX) == 2 && Math.abs(startY - endY) == 1) ||
               (Math.abs(startX - endX) == 1 && Math.abs(startY - endY) == 2); // Конь движется буквой "Г"
   }
}
class Bishop extends Piece {
   public Bishop(String color) {
       super("Bishop", color);
   }
   @Override
   public boolean isValidMove(int startX, int startY, int endX, int endY) {
       return Math.abs(startX - endX) == Math.abs(startY - endY); // Слон движется по диагонали
   }
}
class Queen extends Piece {
   public Queen(String color) {
       super("Queen", color);
   }
   @Override
   public boolean isValidMove(int startX, int startY, int endX, int endY) {
       return (Math.abs(startX - endX) == Math.abs(startY - endY) || startX == endX || startY == endY); // Ферзь может двигаться как слон или ладья
   }
}
class King extends Piece {
   public King(String color) {
       super("King", color);
   }
   @Override
   public boolean isValidMove(int startX, int startY, int endX, int endY) {
       return Math.abs(startX - endX) <= 1 && Math.abs(startY - endY) <= 1; // Король движется на одну клетку в любом направлении
   }
}
class ChessBoard extends JPanel {
   private Piece[][] board;
   public ChessBoard() {
       board = new Piece[8][8];
       setupBoard();
       setPreferredSize(new Dimension(400, 400));
   }
   private void setupBoard() {
       // Установка фигур
       board[0][0] = new Rook("black");
       board[1][0] = new Knight("black");
       board[2][0] = new Bishop("black");
       board[3][0] = new Queen("black");
       board[4][0] = new King("black");
       board[5][0] = new Bishop("black");
       board[6][0] = new Knight("black");
       board[7][0] = new Rook("black");

       // Пешки черных
       for (int i = 0; i < 8; i++) {
           board[i][1] = new Pawn("black");
       }
       // Аналогично для белых
       board[0][7] = new Rook("white");
       board[1][7] = new Knight("white");
       board[2][7] = new Bishop("white");
       board[3][7] = new Queen("white");
       board[4][7] = new King("white");
       board[5][7] = new Bishop("white");
       board[6][7] = new Knight("white");
       board[7][7] = new Rook("white");

       // Пешки белых
       for (int i = 0; i < 8; i++) {
           board[i][6] = new Pawn("white");
       }
   }
   @Override
   protected void paintComponent(Graphics g) {
       super.paintComponent(g);
       drawBoard(g);
       drawPieces(g);
   }
   private void drawBoard(Graphics g) {
       for (int i = 0; i < 8; i++) {
           for (int j = 0; j < 8; j++) {
               if ((i + j) % 2 == 0) {
                   g.setColor(new Color(222, 184, 135));
               } else {
                   g.setColor(Color.GRAY);
               }
               g.fillRect(i * 50, j * 50, 50, 50);
           }
       }
   }
   private void drawPieces(Graphics g) {
       for (int i = 0; i < 8; i++) {
           for (int j = 0; j < 8; j++) {
               Piece piece = board[i][j];
               if (piece != null) {
                 g.setColor(piece.color.equals("white") ? Color.WHITE : Color.BLACK);
                   if (piece instanceof King) {
                       g.fillRect(i * 50 + 10, j * 50 + 10, 30, 30); // Король как квадрат
                   } else if (piece instanceof Queen) {
                       drawPentagon(g, i * 50 + 25, j * 50 + 25, 15); // Ферзь как пятиугольник
                   } else if (piece instanceof Rook) {
                       drawTriangle(g, i * 50 + 25, j * 50 + 25, 20); // Ладья как треугольник
                   } else if (piece instanceof Bishop) {
                       drawDiamond(g, i * 50 + 25, j * 50 + 25, 15); // Слон как ромб
                   } else if (piece instanceof Knight) {
                       drawHexagon(g, i * 50 + 25, j * 50 + 25, 15); // Конь как гексагон
                   } else {
                       g.fillOval(i * 50 + 10, j * 50 + 10, 30, 30); // Остальные фигуры как овалы
                   }
               }
           }
       }
   }
   private void drawPentagon(Graphics g, int x, int y, int size) {
       int[] xPoints = {x, x + size, x + size / 2, x - size / 2, x - size};
       int[] yPoints = {y - size, y + size / 3, y + size, y + size, y + size / 3};
       g.fillPolygon(xPoints, yPoints, 5);
   }
   private void drawTriangle(Graphics g, int x, int y, int size) {
       int[] xPoints = {x, x - size, x + size};
       int[] yPoints = {y - size, y + size, y + size};
       g.fillPolygon(xPoints, yPoints, 3);
   }
   private void drawDiamond(Graphics g, int x, int y, int size) {
       int[] xPoints = {x, x + size, x, x - size};
       int[] yPoints = {y - size, y, y + size, y};
       g.fillPolygon(xPoints, yPoints, 4);
   }
   private void drawHexagon(Graphics g, int x, int y, int size) {
       int[] xPoints = {x, x + size, x + size / 2, x - size / 2, x - size, x};
       int[] yPoints = {y - size, y, y + size, y + size, y, y - size};
       g.fillPolygon(xPoints, yPoints, 6);
   }
}
public class Main_8_2
{
   public static void main(String[] args) {
       JFrame frame = new JFrame("Шахматы");
  frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
       frame.add(new ChessBoard());
       frame.pack();
       frame.setVisible(true);
   }
}`
                    }
                </pre>

                : id === 9 ?
                <pre className="text_20">
                    {
                        `package org.example;
import javax.swing.*;
import java.awt.*;
import java.util.Random;
public class Mathematiko extends JFrame {
   static final int GRID_SIZE = 5;
   static final int DECK_SIZE = 52;
   static final int[] CARD_NUMBERS = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};
   static int[][] grid = new int[GRID_SIZE][GRID_SIZE];
   static int[] deck = new int[DECK_SIZE];
   static Random random = new Random();
   static int deckPointer = 0;

   private JButton[][] buttons = new JButton[GRID_SIZE][GRID_SIZE];
   private JLabel scoreLabel;
   private int totalScore = 0;
   public Mathematiko() {
       initializeDeck();
       initUI();
       playGame();
   }
   private void initUI() {
       setTitle("Математико");
       setSize(500, 600);
       setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
       setLayout(new BorderLayout());
       JPanel gridPanel = new JPanel(new GridLayout(GRID_SIZE, GRID_SIZE));
       for (int i = 0; i < GRID_SIZE; i++) {
           for (int j = 0; j < GRID_SIZE; j++) {
               buttons[i][j] = new JButton("");
               buttons[i][j].setFont(new Font("Arial", Font.PLAIN, 24));
               gridPanel.add(buttons[i][j]);
           }
       }
       add(gridPanel, BorderLayout.CENTER);
       scoreLabel = new JLabel("Total Score: 0", SwingConstants.CENTER);
       scoreLabel.setFont(new Font("Arial", Font.BOLD, 24));
       add(scoreLabel, BorderLayout.SOUTH);
   }
   public void playGame() {
       for (int i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
           if (deckPointer < DECK_SIZE) {
               int card = drawCard();
               placeNumberRandomly(card);
               calculateScore();
           }
       }
   }
   public static void initializeDeck() {
       int index = 0;
       for (int i = 0; i < 4; i++) {
           for (int num : CARD_NUMBERS) {
               deck[index++] = num;
           }
       }
       shuffleDeck();
   }
   public static void shuffleDeck() {
       for (int i = 0; i < DECK_SIZE; i++) {
           int randomIndex = random.nextInt(DECK_SIZE);
           int temp = deck[i];
           deck[i] = deck[randomIndex];
           deck[randomIndex] = temp;
       }
   }
   public static int drawCard() {
       return deck[deckPointer++];
   }
   public void placeNumberRandomly(int number) {
       while (true) {
           int row = random.nextInt(GRID_SIZE);
           int col = random.nextInt(GRID_SIZE);
           if (grid[row][col] == 0) {
               grid[row][col] = number;
     buttons[row][col].setText(String.valueOf(number));
               break;
           }
       }
   }
   public void calculateScore() {
       totalScore = 0;
       for (int i = 0; i < GRID_SIZE; i++) {
           totalScore += evaluateLine(grid[i]);
       }
       for (int j = 0; j < GRID_SIZE; j++) {
           int[] column = new int[GRID_SIZE];
           for (int i = 0; i < GRID_SIZE; i++) {
               column[i] = grid[i][j];
           }
           totalScore += evaluateLine(column);
       }
       int[] diagonal1 = new int[GRID_SIZE];
       int[] diagonal2 = new int[GRID_SIZE];
       for (int i = 0; i < GRID_SIZE; i++) {
           diagonal1[i] = grid[i][i];
           diagonal2[i] = grid[i][GRID_SIZE - i - 1];
       }
       totalScore += evaluateLine(diagonal1);
       totalScore += evaluateLine(diagonal2);
       scoreLabel.setText("Общее кол-во баллов: " + totalScore);
   }
   public static int evaluateLine(int[] line) {
       int score = 0;
       int[] count = new int[14];
       for (int num : line) {
           count[num]++;
       }
       for (int i = 1; i <= 13; i++) {
           if (count[i] == 4) {
               score = 160;
           } else if (count[i] == 3) {
               score = 40;
           }
       }
       return score;
   }
   public static void main(String[] args) {
       SwingUtilities.invokeLater(() -> {
           Mathematiko game = new Mathematiko();
           game.setVisible(true);
       });
   }
}`
                    }
                </pre>

                :  // 10
                <pre className="text_20">
                    {
                        `section .data
    N db 10                    ; Исходное значение N (можно изменить)
    msg db "Результат: ", 0    ; Сообщение для вывода
    len equ $ - msg            ; Длина сообщения
    buffer db '0', 0           ; Буфер для преобразованного числа

section .text
    global _start

_start:
    mov al, [N]                ; Загружаем значение N в регистр AL
    shr al, 1                  ; Делим N на 2 (сдвиг вправо на 1 бит)
    mov [N], al                ; Сохраняем результат обратно в N

    ; Преобразуем число в строку
    movzx eax, byte [N]        ; Загружаем значение N
    add eax, '0'               ; Преобразуем в ASCII
    mov [buffer], al           ; Сохраняем результирующий символ в буфер

    ; Выводим сообщение
    mov eax, 4                 ; Системный вызов для записи
    mov ebx, 1                 ; Записываем в stdout
    mov ecx, msg               ; Указатель на сообщение
    mov edx, len               ; Длина сообщения
    int 0x80                   ; Выполняем системный вызов

    ; Выводим преобразованное значение
    mov eax, 4                 ; Системный вызов для записи
    mov ebx, 1                 ; Записываем в stdout
    mov ecx, buffer            ; Указатель на буфер с символом
    mov edx, 1                 ; Длина выводимого символа
    int 0x80                   ; Выполняем системный вызов

    ; Завершение программы
    mov eax, 1                 ; Системный вызов для выхода
    xor ebx, ebx               ; Код завершения 0
    int 0x80                   ; Выполняем системный вызов`
                    }
                </pre>
            }
        </>
    )
}



