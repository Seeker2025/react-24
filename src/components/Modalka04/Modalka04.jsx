import { useState } from "react";

import large0 from '../../assets/forest01.png';
import large1 from '../../assets/forest02.png';
import large2 from '../../assets/forest03.png';

import small0 from '../../assets/forest01s.png';
import small1 from '../../assets/forest02s.png';
import small2 from '../../assets/forest03s.png';

export const Modalka04 = () =>{

    const arr = [
        {   large0,    small0,    },
        {   large1,    small1,    },
        {   large2,    small2,    },
    ];

    return (
        <>
            <h2>Modalka04</h2>

            <List list = {arr}/>
        </>

    )
}

const List = ( { list } ) =>{

const [ imgState, setImgState ] = useState(null);

    return (
        <ul>
        {
            list.map(( itm, idx) => {
                return <OneItem 
                        key = {itm[`small${idx}`]}
                        url = {itm[`small${idx}`]}
                        largeUrl = {itm[`large${idx}`]}
                        toOpen = {() => setImgState(itm[`large${idx}`])}
                        flagImg = {imgState === itm[`large${idx}`]}
                        />
            })
        }
        </ul>
    )

};

const OneItem = ({ url, toOpen, largeUrl, flagImg}) =>{
        return <li>
                    <div onClick = { toOpen }>
                    <img src = { url } alt ="forest"/>
                    </div>

                    {
                       flagImg
                       &&
                       <Modal url={largeUrl}/>
                        
                    }
            
                </li>

}

const Modal = ( {url} ) =>{
    return <img src = {url} alt = "forest"/>
}

