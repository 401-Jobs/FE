import React from "react";
import { Card,Col } from "antd";
import Company from '../ClientHomePage/Assets/enterprise.png'

const {Meta} = Card
const GridCard = () =>{
    return(
        <div>
            <Col>
              <Card hoverable style={{width:150}} cover={<img src={Company} alt="exmples"/>}>
<Meta title="Sample Card Grid View " description="This is a Test description "/>
              </Card>
            </Col>
        </div>
    )
}

export default GridCard