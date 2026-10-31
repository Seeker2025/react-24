import { useState } from "react";

import { IoMdCloseCircle } from "react-icons/io";

import large0 from '../../assets/forest01.png';
import large1 from '../../assets/forest02.png';
import large2 from '../../assets/forest03.png';

import small0 from '../../assets/forest01s.png';
import small1 from '../../assets/forest02s.png';
import small2 from '../../assets/forest03s.png';

import { Box, UlBigBox } from './Modalka04.styled';
 
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
debugger;

    return (
       
            <UlBigBox>
        {
            list.map(( itm, idx ) => {

                debugger;
                
                return <OneItem 
                        key =       {itm[`small${idx}`]}
                        url =       {itm[`small${idx}`]}
                        largeUrl =  {itm[`large${idx}`]}
                        toOpen =    {() =>{
                            debugger;
                            setImgState(itm[`large${idx}`])
                        } }
                        toClose =   {() => setImgState(null)}
                        flagImg =   {imgState === itm[`large${idx}`]}
                        />
            })
        }
            </UlBigBox>
       
    )
};

const OneItem = ({ url, toOpen, toClose, largeUrl, flagImg}) =>{
        return <li>
                    <div onClick = { toOpen }>
                    <img src = { url } alt ="forest"/>
                    </div>

                    {
                       flagImg
                       &&
                       <Modal url={largeUrl} closeBtn ={toClose}/>
                    }
                </li>
}

const Modal = ( {url, closeBtn} ) => {
    return <Box>
                <img src = {url} alt = "forest"/>
                <span onClick = { closeBtn }>
                   <IoMdCloseCircle />
                </span>
           </Box>
   
}

