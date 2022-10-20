import React,{useEffect,useState} from 'react'

import axios from 'axios';
import Card from '../Card/Card';
import './Sites.css';

export default function Sites() {

    const [sitesList,setSitesList]=useState([]);

    useEffect(() => {
        axios.get('/Sites.json').then((res)=>{
            console.log(res);
            setSitesList([...res.data]);


        })
        .catch((error)=>{
            console.log(error);
        })
        
        
    }, [])
    return (
        <div className="container">
            {
                sitesList.map((element,index)=>
                    <Card key={index} i={0} site={element}/>
                )
            }
        </div>
    )
}
