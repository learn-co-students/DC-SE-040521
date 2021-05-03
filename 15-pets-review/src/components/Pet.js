import React from 'react'

class Pet extends React.Component {
  render() {
    const { age, gender, isAdopted, name, type, weight, id } = this.props.petData
    // const age = this.props.petData.age 

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            { gender === "female" ? '♀': '♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
         
          <button className={isAdopted ? "ui primary button" : "ui disabled button"}>Already adopted</button>

          <button onClick={() => this.props.adoptPet(id)} className={isAdopted === false ? "ui primary button" : "ui disabled button"}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
