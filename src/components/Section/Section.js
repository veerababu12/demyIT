import React, { useState } from 'react';

function Section(props) {
  const aboutUsData = props.aboutUsData;
const [status,setStatus]=useState(false);
  return (
    <div>
      <section id="about" className="about">
        {aboutUsData.map((data, index) => (
          <div key={index} >
                      <h1 class="heading">{data.heading}</h1>
                      <div className='row' >
            <div className="content">
              <h3>{data.subHeading}</h3>
              <p>{data.content}</p>
              {data.btn != "Read More" ? null : <a href="#"><button className="btn">{data.btn}</button></a>}

            </div>
          </div>
          </div>

        ))}
      </section>
    </div>
  );
}

export default Section;
