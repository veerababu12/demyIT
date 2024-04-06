import React, { useState } from 'react';

function Section(props) {
  const aboutUsData = props.Data;
  const [showContent2, setShowContent2] = useState(false);

  const handleClick = () => {
    setShowContent2(!showContent2);
  };

  return (
    <div>
      <section id="#" className="about">
        {aboutUsData.map((data, index) => (
          <div key={index}>
            <h1 className="heading" id={data.id}>{data.heading}</h1>
            <div className='row'>
              <div className="content" id={data.id}>
                <h3>{data.subHeading}</h3>
                <p>{showContent2 ? data.content2 : data.content}</p>
                {data.btn !== "Read More" ? null : (
                  <button className="btn" onClick={handleClick}>
                    {showContent2 ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Section;
