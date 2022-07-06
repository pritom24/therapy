import React, {useState} from 'react'
import Common from './Common'
import web from '../src/image/home.jpg'
import Clients from './OurClients/Clients'
import {upcome} from './Sdata'

function Home() {
  const [items, setItems] = useState(upcome)
  return <>
  <Common name="grow your business with" imgsrc={web} visit='/services' btnname="Get Started" brandname="Primex"/>
  <Clients  items={items} title='Our Clients'/>
  </>
}

export default Home