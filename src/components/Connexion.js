import React, { Component, Fragment } from 'react'

class Connexion extends Component {
  render() {
    return(
      <div className="connexionBox">
        <form className='connexion'>
          <input 
          placeholder='Pseudo'
          type="text"
          required/>
          <button type='submit'></button>
        </form>
      </div>
    )
  }
}

export default Connexion