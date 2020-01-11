import React from 'react';

const Person = (props) => {
  return (
    <div className='block'>
      <p className='code'>{props.code}</p>
      <p className='name'>{props.name}</p>
      <p className='surname'>{props.surname}</p>
      <p className='residence'>{props.residence}</p>
      <p className='rank'>{props.rank}</p>
    </div>

    
    
  )
}

export default Person