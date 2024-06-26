import { useState } from "react";

const faqs = [
  {
    id:"faqs",
    title: "What does your company do?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id:"faqs",
    title: "Are there any job openings at your company?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id:"faqs",
    title: "How can I contact customer support?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function AccodionApp() {
  return (
      <Accordion data={faqs} />
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  const accordionStyle = {
    width: "1200px",
    margin: "100px auto 300px auto",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  };

  const accordionMediaQuery = `@media only screen and (max-width: 1000px) {
    width: 500px;
    margin: 50px auto;
  }`;

  return (
<div style={{ ...accordionStyle, ...(window.innerWidth <= 900 && { width: 'auto', margin: '100px auto' }) }}>
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      <style>{accordionMediaQuery}</style>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  const itemStyle = {
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)",
    padding: "5px 24px",
    paddingRight: "48px",
    cursor: "pointer",
    borderTop: "4px solid #fff",
    borderBottom: "4px solid #fff",
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    columnGap: "24px",
    rowGap: "32px",
    alignItems: "center",
    ...(isOpen && {
      borderTop: "4px solid #087f5b",
    }),
  };

  const numberStyle = {
    fontSize: "24px",
    fontWeight: "500",
    color: isOpen ? "#087f5b" : "#ced4da",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "500",
    color: isOpen ? "#087f5b" : "#343a40",
  };

  const iconStyle = {
    fontSize: "24px",
    fontWeight: "500",
  };

  const contentBoxStyle = {
    gridColumn: "2 / -1",
    paddingBottom: "16px",
    lineHeight: "1.6",
    fontSize: "15px",
  };

  return (
    <div style={itemStyle} onClick={handleToggle}>
      <p style={numberStyle}>{num <= 9 ? `0${num + 1}` : num + 1}</p>
      <p style={titleStyle}>{title}</p>
      <p style={iconStyle}>{isOpen ? "-" : "+"}</p>
      {isOpen && <div style={contentBoxStyle}>{children}</div>}
    </div>
  );
}
