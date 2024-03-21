import React from 'react';
import TestimonalsProps from './TestimonalsProps';

function Testimonals({ data }) {
  return (
    
<div class="testimonials mt-100">
    <div class="container"></div>
    <div class="owl-carousel testimonials-carousel">
      {data.testimonials.items.map((eachTestimonial, index) => (
        <TestimonalsProps key={index} name={eachTestimonial.name} />
      ))}
    </div>
    </div>

  );
}

export default Testimonals;
