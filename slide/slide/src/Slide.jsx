import React from "react";
import styles from "./Slide.module.css";
import foto1 from "./thiago.png";
import foto2 from "./foto2.jpg";
import foto3 from "./foto3.jpg";
import foto4 from "./foto4.jpg";
import DogSvg from "./DogSvg";

const slides = [
  {
    id: "slide1",
    image: foto1,
  },
  {
    id: "slide2",
    image: foto2,
  },
  {
    id: "slide3",
    image: foto3,
  },
  {
    id: "slide4",
    image: foto4,
  },
];

const Slide = () => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  const [olho ,setOlho] = React.useState(0);

  function handleClik(){
    for(let i =0; i <6; i++){
      setTimeout(()=>{
        setOlho(i);
      },100 * i)
    }
    
  }

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) {
      setActive(active - 1);
    }
    handleClik()
  }

  function slideNext() {
    if (active < slides.length - 1) {
      setActive(active + 1);
    }
    handleClik()
  }

  return (
    <section className={styles.container}>
       <DogSvg color="#84e" olho={olho} />
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            <img className={styles.img} src={slide.image} alt="Thiago" />
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
