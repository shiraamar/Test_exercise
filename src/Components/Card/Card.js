import React, { useEffect } from 'react'
import Sites from '../Sites/Sites'
import './Card.css';
export default function Card(props) {

    const colors = ['#9dd8ce', '#54d4e2', '#accdd1','#fabc81'];
    const { site,i } = props;
  
    return (
        <div className="card" style={{backgroundColor:colors[i%4]}}>
            <div>
                Id:{site.id}

            </div>
            <div>

                Site Name:{site.name}
            </div>

            <div>

                <a href={`//${site.url}`}  target="_blank">Site Url:{site.name}</a>
            </div>
            {
               
                site.subData &&

                <div>
                    {site.subData.map((element,index) =>
                    <Card key={index} i={i+1} site={element} />  
                    )}
                </div>
            }
        </div>
    )
}
