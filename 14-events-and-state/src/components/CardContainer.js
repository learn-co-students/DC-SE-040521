import React from 'react'


//Components
import { Card } from './Card'

export default class CardContainer extends React.Component {

 

    render(){ 

        return(
            <div className="row ml-3">
              { this.props.paintings.map(paintingObj => <Card deletePainting={this.props.deletePainting} key={paintingObj.id} painting={paintingObj}/>) }
            </div>
        )
    }

}