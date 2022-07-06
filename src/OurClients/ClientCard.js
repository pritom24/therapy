import React from "react"
import { Link } from "react-router-dom"

const ClientCard = ({ item: { id, cover, name, desc } }) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <h3>{name}</h3>
          <span>{desc}</span> <br />
          {/*<Link to={`/singlepage/${id}`}>*/}
          <button className='primary'>
            <i className='fa fa-play'></i> see more
          </button>
          {/*</Link>*/}
        </div>
      </div>
    </>
  )
}

export default ClientCard