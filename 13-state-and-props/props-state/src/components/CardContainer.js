import React from 'react'
import paintingData from '../data/paintings'
//componets
import { Card } from './Card'


export default class CardContainer extends React.Component {

    render(){ 

        console.log(paintingData)

        return(
            <div className="container row">
                {paintingData.map(obj => <Card key={obj.id} notherProp="a string" paintingData={obj}/>)}
            </div>
        )
    }

}