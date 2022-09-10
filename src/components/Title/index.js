import React from 'react';

// title과 textColor 데이터를 props로 받습니다.
const Title = ({title, textColor})=>{
  return(
    <h1 style={{color: textColor}}>{title}</h1>
  )
};

export default Title;