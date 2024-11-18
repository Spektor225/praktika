import { useState } from 'react';
import './Global_main.css';



export const GlobalMain = () =>
{
    const [data, set_data] = useState(null)


    const fun = (arr1) =>
    {
        set_data('loading')

        setTimeout(
            () =>
            {
                set_data(
                    arr.filter( (item) => arr1.includes(item.id) )
                    // arr.filter( (item) => false )
                )
            }
            
            ,
            1000
        )
    }


    return (
        <div className='container_main'>

            <div className='bar' style={{overflow: 'auto'}}>
                {/* <label>jijiji</label> */}

                <div className='view'>
                    <label className='text_medium' onClick={() => fun([4,6])}>В работе</label>
                </div>

                <div className='view'>
                    <label className='text_medium' onClick={() => fun([1,2,3,4,5,7,9,10,11,12])}>Новые</label>
                </div>
            </div>

            {
                data === null ?
                <></>

                : data === 'loading' ?
                <div style={{alignItems: 'center', justifyContent: 'center', display: "flex", flex: '1'}}>
                    <div class="loader"></div> 
                </div> 
                
                : data.length === 0 ?
                <div>Ничего не найдено</div>

                : 
                <div className='window' style={{overflow: 'auto'}}>
                    {/* <label>jijiji</label> */}
                    {
                        data.map(
                            (item) =>
                            {
                                return(
                                    <div key={item.id} className='view'>
                                        <label className='text_medium'>{item.req_status}</label>

                                        <label className='text_min margin_top_4'>{item.req_adr}</label>
                                        <label className='text_min margin_top_4'>{item.req_reason}</label>

                                        <label className='text_min margin_top_4'>{item.req_date}</label>
                                        {item.req_timelimit && <label className='text_min margin_top_4'>{item.req_timelimit}</label>}
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            }
            
        </div>
    )
}





const arr = 
[
    {
        id: 1,

        req_status: "Обычная",

        req_adr: "г. Багратионовск, ул. Б. Хмельницкого, д. 8, кв. 0",
        req_reason: "Борьба с крысами",

        req_date: "2022.09.09 10:48:00",
        req_timelimit: null,
    }
    ,
    {
        id: 2,

        req_status: "Срочная",

        req_adr: "г. Калининград, ул. Железнодорожная, д. 14, кв. 1",
        req_reason: "Починка крыши",

        req_date: "2023.09.09 11:10:00",
        req_timelimit: "2023.09.10 11:10:00",
    }
    ,
    {
        id: 3,

        req_status: "Аварийная",

        req_adr: "г. Калининград, пер. 10 февраля, д. 2, кв. 2",
        req_reason: "Затопление подвала",

        req_date: "2021.04.26 14:50:00",
        req_timelimit: "2021.04.26 15:50:00",
    }
    ,
    {
        id: 4,

        req_status: "Обычная",

        req_adr: "г. Багратионовск, ул. Б. Хмельницкого, д. 8, кв. 0",
        req_reason: "Борьба с крысами",

        req_date: "2022.09.09 10:48:00",
        req_timelimit: null,
    }
    ,
    {
        id: 5,

        req_status: "Срочная",

        req_adr: "г. Калининград, ул. Железнодорожная, д. 14, кв. 1",
        req_reason: "Починка крыши",

        req_date: "2023.09.09 11:10:00",
        req_timelimit: "2023.09.10 11:10:00",
    }
    ,
    {
        id: 6,

        req_status: "Аварийная",

        req_adr: "г. Калининград, пер. 10 февраля, д. 2, кв. 2",
        req_reason: "Затопление подвала",

        req_date: "2021.04.26 14:50:00",
        req_timelimit: "2021.04.26 15:50:00",
    }
    ,
    {
        id: 7,

        req_status: "Обычная",

        req_adr: "г. Багратионовск, ул. Б. Хмельницкого, д. 8, кв. 0",
        req_reason: "Борьба с крысами",

        req_date: "2022.09.09 10:48:00",
        req_timelimit: null,
    }
    ,
    {
        id: 8,

        req_status: "Срочная",

        req_adr: "г. Калининград, ул. Железнодорожная, д. 14, кв. 1",
        req_reason: "Починка крыши",

        req_date: "2023.09.09 11:10:00",
        req_timelimit: "2023.09.10 11:10:00",
    }
    ,
    {
        id: 9,

        req_status: "Аварийная",

        req_adr: "г. Калининград, пер. 10 февраля, д. 2, кв. 2",
        req_reason: "Затопление подвала",

        req_date: "2021.04.26 14:50:00",
        req_timelimit: "2021.04.26 15:50:00",
    }
    ,
    {
        id: 10,

        req_status: "Обычная",

        req_adr: "г. Багратионовск, ул. Б. Хмельницкого, д. 8, кв. 0",
        req_reason: "Борьба с крысами",

        req_date: "2022.09.09 10:48:00",
        req_timelimit: null,
    }
    ,
    {
        id: 11,

        req_status: "Срочная",

        req_adr: "г. Калининград, ул. Железнодорожная, д. 14, кв. 1",
        req_reason: "Починка крыши",

        req_date: "2023.09.09 11:10:00",
        req_timelimit: "2023.09.10 11:10:00",
    }
    ,
    {
        id: 12,

        req_status: "Аварийная",

        req_adr: "г. Калининград, пер. 10 февраля, д. 2, кв. 2",
        req_reason: "Затопление подвала",

        req_date: "2021.04.26 14:50:00",
        req_timelimit: "2021.04.26 15:50:00",
    }
]