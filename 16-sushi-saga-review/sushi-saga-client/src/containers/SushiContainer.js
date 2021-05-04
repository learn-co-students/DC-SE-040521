import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, moreSushi, eatSushi, eatenSushi}) => {
  return (
    <Fragment>
      <div className="belt">
        { sushis.map((sushi) => <Sushi eatenSushi={eatenSushi} key={sushi.id} eatSushi={eatSushi} sushiData={sushi}/>) }
        <MoreButton moreSushi={moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer