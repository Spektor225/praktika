import { useRef, useState } from "react"





export const GlobalWindowZadanie2 = (props) =>
{
    const [data, set_data] = useState(props.data)


    return(
        <div className="zadanie_view">

            


            {
                data.id === 2 ?
                <>
                    <div style={{width: '100%'}}>
                        <label className="text_20 mt_10_pr">{data.name}</label>    
                    </div>
                    

                    <label className="text_20 mt_10_pr">{data.title_1}</label>

                    <img src={data.img_1} alt="???" className="mt_50_px" style={{width: '400px'}}/>   
                    <label className="text_20">{data.title_img_1}</label>

                    <img src={data.img_2} alt="???" className="mt_50_px"/>   
                    <label className="text_20">{data.title_img_2}</label>

                    <img src={data.img_3} alt="???" className="mt_50_px"/>   
                    <label className="text_20">{data.title_img_3}</label>

                    <img src={data.img_4} alt="???" className="mt_50_px"/>   
                    <label className="text_20">{data.title_img_4}</label>


                    <div className="mt_10_pr" style={{width: '100%'}}>
                        <label className="text_20">{data.title_2}</label>    
                    </div>
                    
                    <pre className="mt_50_px text_20">
                        {data.title_text_2}
                    </pre>


                    <div className="mt_10_pr" style={{width: '100%'}}>
                        <label className="text_20">{data.title_3}</label>
                    </div>
                    <img src={data.title_img_7} alt="???" className="mt_50_px" style={{width: '400px'}}/>   
                    {/* <table className="text_20 mt_50_px">
                        <tr>
                            <th>Переменная</th>
                            <th>Тип</th>
                            <th>Предназначение</th>
                        </tr>
                        {
                            data.title_table_3.map(
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
                    </table> */}


                    <div className="mt_10_pr" style={{width: '100%'}}>
                        <label className="text_20">{data.title_4}</label>    
                    </div>

                    <img src={data.img_5} alt="???" className="mt_50_px"/>   
                    <label className="text_20">{data.title_img_5}</label>

                    <img src={data.img_6} alt="???" className="mt_50_px"/>   
                    <label className="text_20">{data.title_img_6}</label>


                    <div className="mt_10_pr" style={{width: '100%'}}>
                        <label className="text_20">{data.title_5}</label> 
                    </div>

                    <pre className="mt_30_px text_20">
                        {data.title_text_5[0]}
                    </pre>
                    <img src={data.title_text_5[1]} alt="???" className="mt_30_px"/>  

                    <pre className="mt_30_px text_20">
                        {data.title_text_5[2]}
                    </pre>
                    <img src={data.title_text_5[3]} alt="???" className="mt_30_px"/> 

                    <pre className="mt_30_px text_20">
                        {data.title_text_5[4]}
                    </pre>
                    <img src={data.title_text_5[5]} alt="???" className="mt_30_px"/> 

                    <pre className="mt_30_px text_20">
                        {data.title_text_5[6]}
                    </pre>
                    <img src={data.title_text_5[7]} alt="???" className="mt_30_px"/> 

                    <pre className="mt_30_px text_20">
                        {data.title_text_5[8]}
                    </pre>
                    <img src={data.title_text_5[9]} alt="???" className="mt_30_px"/> 

                    <pre className="mt_30_px text_20">
                        {data.title_text_5[10]}
                    </pre>
                    <img src={data.title_text_5[11]} alt="???" className="mt_30_px"/> 
                </>
                :
                <>
                    <div style={{width: '100%'}}>
                        <pre className="mt_10_pr text_20">
                            {data.name}
                        </pre>
                        {
                            data.id === 3 &&
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <img src={data.img_1} alt="???" className="mt_50_px"/>   
                                <label className="text_20 mt_30_px">{data.title_img_1}</label>
                            </div>
                            
                        }
                    </div>
                    
                </>
            }
            

        </div>
    )
}