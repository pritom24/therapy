import React, {useState} from 'react';
import { Adata } from './Adata';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';


const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")} h1 {
    margin-bottom: 1rem;
    font-size: calc(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div`
padding: 0rem 0rem;
order: ${({ reverse }) => (reverse ? "1" : "2")};
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width:768px){
    order: ${({ reverse }) => (reverse ? "2" : "1")};
}
img{
width: 100%;
height: 100%;
object-fit: cover;
@media screen and (max-width:768px){
    width:90%;
    height:90%
}`;
const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #f5f5f5;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h3 {
    
 display: flex;

 height:100px;
   justify-content: center;
   align-items: center;
    font-size: 20px;
    color:rgb(22, 22, 22)
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #f5f5f5;
  color: rgb(22, 22, 22);
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #b97fb8;
  border-top: 2px solid #b97fb8;
  transition: 0.3s ease-in-out;
  p {
    font-size: 1rem;
    transition: 0.3s ease-in-out;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
    
    <div className='my-5'>
        <h1 className='text-center faqs'> Question about therapy</h1>
        <h5 className='text-center'>the most common question</h5>
        </div>
    <IconContext.Provider value={{ color: '#b97fb8', size: '25px' }}>
      <ColumnLeft><div className='container-fluid mb-5'>
      <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row gy-4'>
          {Adata.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h3>{item.question}</h3>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answere}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </div>
        </div>
    </div>
  </div></ColumnLeft>
 
      
    </IconContext.Provider>
    </>
  );
};

export default Accordion;