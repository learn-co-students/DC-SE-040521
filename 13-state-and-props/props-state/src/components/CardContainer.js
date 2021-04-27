import React from 'react'
import paintingData from '../data/paintings'

//Components
import { Card } from './Card'

export default class CardContainer extends React.Component {

 

    render(){ 
        console.log(paintingData)
        return(
            <div className="row ml-3">
              { paintingData.map(paintingObj => <Card key={paintingObj.id} data={paintingObj}/>) }
            </div>
        )
    }

}