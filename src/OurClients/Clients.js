import React from 'react'
import { Link } from "react-router-dom"
import ClientCard from './ClientCard'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
          <i className='fa fa-chevron-left'></i>
        </button>
      </div>
    )
  }
  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
          <i className='fa fa-chevron-right'></i>
        </button>
      </div>
    )
  }
  const Clients = ({ items, title }) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <>
        <section className='upcome'>
          <div className='clientContainer'>
            <div className='heading flexSB'>
              <h1>{title}</h1>
              <Link className='view' to='/'>View All</Link>
            </div>
            <div className='content'>
              <Slider {...settings}>
                {items.map((item) => {
                  return (
                    <>
                      <ClientCard key={item.id} item={item} />
                    </>
                  )
                })}
              </Slider>
            </div>
          </div>
        </section>
      </>
    )
  }
export default Clients