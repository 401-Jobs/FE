import React from "react";
import {Avatar , Card} from 'antd'
import company from '../ClientHomePage/Assets/enterprise.png'
const {Meta} = Card;
const ListCard = () =>{
    return(
        <div style={{marginBottom:'1rem'}}>
            <Card hoverable>
                <Avatar 
                  shape="square"
                  size={{md:140 , lg:140 , xl:140 , xxl:140}}
                  src={company}/>
                <Meta title='Sample Card List View' description="second test "/>
            </Card>
        </div>
    )
}

export default ListCard