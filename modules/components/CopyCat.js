import React from 'react';
import { styles } from '../styles.js'
import PropTypes from 'prop-types'

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
  
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape
    const handleChange = this.props.handleChange
    const input = this.props.input
    const name = this.props.name
    
    return (
      <div style ={styles.divStyles}>
        <h1>Copy Cat {name? name : 'Tom'}</h1>
        <input type='text' value={input} onChange={handleChange}/>
        <img
          style ={styles.imgStyles} 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>{copying? input : !input}</p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  input: PropTypes.string.isRequired,
  toggleTape: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  copying: PropTypes.bool.isRequired,
  name: PropTypes.string
};