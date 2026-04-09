import { Fragment, useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import Tiles from 'components/Tiles';
import ListColumn from 'components/ListColumn';
import { aboutList1 } from '../data';

const Services = () => {
  const h2Ref = useRef(null);
  const [h2Width, setH2Width] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (h2Ref.current) {
        setH2Width(h2Ref.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <Fragment>
      <div className="row gx-lg-8 gx-xl-12 gy-12 align-items-center mb-5">

        {/* Left Column - Tiles with Counter */}
        <div className="col-lg-6 position-relative">
          <div
            className="btn btn-circle bg-theme-dark pe-none position-absolute counter-wrapper flex-column d-none d-md-flex"
            style={{
              zIndex: 1,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 170,
              height: 170,
            }}
          >
            <h3 className="fs-24 text-white mb-1 mt-n2">
              <CountUp end={25} suffix="+" />
            </h3>
            <p className="fs-18 merriweather">Chequeos realizados</p>
          </div>
          <Tiles />
        </div>

        {/* Right Column - Text Content */}
        <div className="col-lg-6">

          <div
            className="d-flex align-items-center justify-content-start mb-2"
            style={{ width: `${h2Width}px` }}
          >
            <h3 className="fs-18 fw-bold text-second merriweather mb-0 me-3">
              Innovación en Salud
            </h3>

            <div
              style={{
                flex: 1,
                height: '3px',
                backgroundColor: '#b3e5fc',
              }}
            />
          </div>

          <h2 className="fs-38 mb-5 merriweather d-inline" ref={h2Ref}>
            Cabina de Chequeo Médico Automatizada
          </h2>

          <p className="mb-5 fs-18 text-justify lato">
            La cabina de chequeo médico automatizada es una propuesta tecnológica
            diseñada para mejorar el acceso a servicios de salud preventiva. 
            Consiste en un espacio privado equipado con sensores biométricos que 
            permiten medir diferentes indicadores de salud de forma rápida y sencilla.
            <br /><br />
            A través de una interfaz digital intuitiva, el sistema recopila datos
            fisiológicos del usuario y los analiza mediante inteligencia artificial
            para generar un reporte claro sobre su estado general de salud.
            <br /><br />
            Esta solución busca facilitar evaluaciones médicas básicas, reducir
            los costos de atención y fomentar la detección temprana de posibles
            riesgos de salud, contribuyendo así a una cultura de prevención médica.
          </p>

          <ListColumn list={aboutList1} />

        </div>
      </div>
    </Fragment>
  );
};

export default Services;