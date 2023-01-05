import styled from "styled-components";
import imagem from "../icons/pngwing.png"
import { TypeColor } from "../types/TypeColor";

// export const Container = styled.div`
// width: 440px;
// height: 210px;


// background: #71C3FF;
// border-radius: 12px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   img {
// width: 193px;
// height: 193px;
// top: -20px;  }

//   div {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between

//     button {
//       width: 50%;
//       height: 40px;
//     }
//   }
// `;


export const ImgStyle = styled.div`
  display: flex;

.container{
  width: 332px;
  height: 200px;
  left: 0px;
  top: 30px;
  gap: 20px;
  color:white;
  font-size: 15px;
  /* background: (${TypeColor}); */
  background: #71c3ff;
  border-radius: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${imagem});
  background-repeat: no-repeat;
  /* background-position: right; */
  background-position: 105% 90%;

 
  border-radius: 12px;
  padding-left: 1.43rem;
  
  /* margin-bottom: 1.25rem; */
  /* margin-top: 5vh; */
}
h1{
  color: white;
  font-size: 20px;
}

.types{
  /* position: absolute; */
width: 150px;
/* height: 170px; */
/* left: 229px; */
/* top: -62px; */
/* gap: 20px; */
height:9px;
margin-left:-101px;
margin-top: 70px;
display: flex;
  gap: 0.62rem;
img{
  width: 139px;
    height: 119px;
    margin-right: -95px;
    margin-left: 4px;
    margin-top: -156px;


}
/* background: url(pngwing.png);
opacity: 0.17;
transform: rotate(30deg); */
}.button{
  display:flex;
  justify-content: space-between;
  /* padding-top: 35px; */
  margin-left: -6px;
  margin-top: -34px;

  flex-direction: row-reverse;


 } .details{
  width: 74px;
height: 24px;
cursor: pointer;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
margin-top: -3px;

/* identical to box height */

text-decoration-line: underline;

color: #FFFFFF;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}
.bntDel{
  

width: 136px;
height: 33px;
padding: 4px 10px;
margin-top: -9px;
margin-right: 20px;

background: #FFFFFF;
color:white;
background: red;
border-radius: 8px;
border-color: red;
}
 .cap{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
margin-top: -11px;
margin-right: 20px;



width: 136px;
height: 33px;

background: #FFFFFF;
border-radius: 8px;
border-color: white;
}
  
/* } */
  img {
  

width: 227px;
    height: 150px;
    padding-left: 90px;
    margin-top: -102px;
    margin-left: 28px;



/* position: absolute; */
/* width: 193px;
height: 193px;
left: 1206px;
top: 820px; */


/* left: 745px;
transform: rotate(30deg); */

/* top: 554px */
;}
.info{
  display:flex;
  margin: 20px;
    flex-direction: column;
  p{
    margin-left: -24px;
    margin-top: 2px;



  }
}
h2{
  color: white;
  font-size: 20px;
  line-height: 10px;
    margin-left: -26px;
    margin-top: -6px;

    font-family: 'Inter';
font-style: normal;
font-weight: 400px;
font-size: 22px;
line-height: 39px;


}` 

/* background: url(image.png);} */

/* background: url(pngwing.png); */
/* opacity: 0.17; */
/* width: 193px;
height: 193px;
left: 745px;
  }
`;

*/


