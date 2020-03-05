import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='Card'>
      <button
        type='button'
        onClick={() => props.handleDelete(props.id)}
      >
        delete
      </button>
    </div>
  )
}
