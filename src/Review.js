// import React, {useEffect, useState} from 'react'
// import Tdata from './Tdata';
// import "./review.css"
// import { Button } from './Button';




// // import required modules

// function Review() {
//   const [people] = useState(Tdata)
//   const [index, setIndex] = useState(0)

//   useEffect(()=>{
//     const lastIndex = people.length -1
//     if(index<0){
//       setIndex(lastIndex)
//     }
//     if(index>lastIndex){
//       setIndex(0)
//     }
//   },[index, people])

//   useEffect(()=>{
//     let slider = setInterval(()=>{
//       setIndex(index+1)
//     }, 4000)
//     return ()=>{
//       clearInterval(slider)
//     }
//   }, [index])
//   return  <>
  
//   <section className='section'>
//     <div className="title">
//       <h2>Testimonial</h2>
//     </div>
//     <div className="section-center">
//       {people.map((item, key)=>{
//         const{id, img, name, testimoni} = item
//         let position = "nextSlide"
//         if(key === index){
//           position = 'activeSlide'
//         }
//         if(key === index -1 || (index===0 && key === people.length -1)){
//           position = "lastSlide"
//         }
//         return (
//           <article className={position} key={id} >
//             <img src={img} alt={name} className="person-img" />
//             <h4>{name}</h4>
//             <p className='text'>{testimoni}</p>
          
//           </article>
//         )
//       })}
//       <button className='next' onClick={()=> setIndex(index -1)}>
//         <i className='fas fa-arrow-left'></i>
//       </button>
//       <button className='prev' onClick={()=> setIndex(index +1)}>
//         <i className='fas fa-arrow-right'></i>
//       </button>
//     </div>
//     <Button > make an appointment</Button>
//   </section>
  
//    </>
// }

// export default Review