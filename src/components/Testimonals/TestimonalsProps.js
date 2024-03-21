import React from 'react'

function TestimonalsProps(props)
 {
  return (
    <div class="testimonial-item row align-items-center">
                <div class="testimonial-img">
                    <img src="{props.image}" alt="Testimonial image"/>
                </div>
                <div class="testimonial-text">
                    <h3>{props.name}</h3>
                    <h4>Designation</h4>
                    <p>
                        Testimonial

                    </p>
                </div>
                </div>

  )
}

export default TestimonalsProps;
