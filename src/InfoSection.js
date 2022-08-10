import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./infosection.css";
const Section = styled.div`
  width: 100%;
  height: 90%;
  padding: 3rem 0rem;
  background-color: #f5f5f5;
`;
const Conteiner = styled.div`
  padding: 3rem calc((100vh-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
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

const ColumnRigth = styled.div`
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



const InfoSection = ({ heading, peragraphOne, reverse, image }) => {
    const [frontBlog, setFrontBlog] = useState([]);
   

      useEffect(() => {
     axios.get('https://www.sadia.primex-bd.com/api/front-blogs').then(res=>{
        console.log(res.data);
        setFrontBlog(res.data)
     }).catch(err=>{
        console.log(err);
     })
      }, []);

  return (
    <Section>
      <Conteiner>
        <ColumnLeft>
          {/* <div className="blog-margin">
            <h3 className="text-center my-therapy"> Explore my therapy</h3>
            <img className="person-img" src={image} alt="" />
            <h1>{heading}</h1>
            <p>{peragraphOne}</p>
            <Button className="button" to={"/blogs"}>
              Read More
            </Button>
          </div> */} 
          <h3 className="text-center my-therapy"> Explore my therapy</h3>
            {
                frontBlog.map((value)=>{
                    return <div className="blog-margin">
           
            <img className="person-img" src={image} alt="" />
            <h1>{value.title}</h1>
            {/* <p>{value.details}</p> */}

            <Button className="button" to={"/blogs"}>
              Read More
            </Button>
          </div>
                })
            }
          
        </ColumnLeft>

        <ColumnRigth reverse={reverse}>
          <img src={image} alt="" />
        </ColumnRigth>
      </Conteiner>
    </Section>
  );
};

export default InfoSection;
