import React from 'react';
import $ from 'jquery';
import handlePreviousClick from '../AvatarSlider'
import handleNextClick from '../AvatarSlider'


$(".previousButton").on(function(){
    $({handlePreviousClick}).animate({left: "+=100px"}, "slow");
  });
  
  $(".nextButton").on(function(){
    $(handleNextClick).animate({right: "-=100px"}, "slow");
  });

const Button = ({ children, onClick, type = 'button', className }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
