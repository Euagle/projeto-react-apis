import styled from "styled-components";

export const Container = styled.header`
 
 
  .home{
    display:flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    margin-rigth: 200px;
    width: 1200px;

     button {
    /* position: absolute; */
   display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

/* position: absolute; */
width: 256px;
height: 74px;
    margin-top: 20px;
    margin-right: 171px;

background: #33A4F5;
border-radius: 8px;
border-color: #33A4F5;
color:white;
  }
  img{
    width: 307px;
height: 113px;
    margin-right: 152px;
    padding: 14px;

  }};
  .pokedex{
display:flex;

h3{
  width: 243px;
height: 36px;
left: 100px;
    margin-top: 30px;


font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
/* identical to box height */

text-decoration-line: underline;

color: #1A1A1A;
cursor: pointer;

 

}img{
     width: 307px;
height: 113px;
    margin-right: 152px;
    padding: 14px;
        margin-left: 200px;


}}
.details{
  display:flex;

  h3{
      width: 243px;
height: 36px;
left: 100px;
    margin-top: 51px;


font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
/* identical to box height */

text-decoration-line: underline;

color: #1A1A1A;
cursor: pointer;

  }
  img{
      width: 307px;
height: 113px;
    margin-right: 152px;
    padding: 14px;
    top: 55px;

        margin-left: 200px;
            margin-top: 15px;


  

  
 

} .bntDel{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

position: absolute;
width: 226px;
height: 57px;
left: 1100px;
top: 51px;

background: #FF6262;
border-radius: 8px;
/* width: 230px;
height: 50px;
padding: 4px 10px;
margin-top: 34px;
margin-right: 20px;

background: #FFFFFF;
color:white;
background: red;
border-radius: 8px;
border-color: red; */

  }}
  
`;
