import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "../components/VerticalTimeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap, faHeart } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-violet-400 to-purple-500 dark:from-violet-800 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mi Línea de Tiempo
          </h1>
          <p className="text-xl text-violet-100 max-w-2xl mx-auto">
            Un recorrido por mi trayectoria profesional y personal
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <VerticalTimeline>
          {/* Compromiso */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3b82f6', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #3b82f6' }}
            date="Septiembre 2024"
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faHeart} />}
            title="Compromiso"
            subtitle="Con el amor de mi vida"
          >
            <p>
              Me comprometí con el amor de mi vida, marcando el inicio de una nueva etapa personal llena de amor y felicidad.
            </p>
          </VerticalTimelineElement>

          {/* Iluma Alliance */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3b82f6', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #3b82f6' }}
            date="Diciembre 2023 - Presente"
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            title="Bioinformatic Associate"
            subtitle="Iluma Alliance"
          >
            <p>
              Lideré la creación de una plataforma web para visualización interactiva de reportes, 
              desarrollé un agente de IA para resumir información y creé un pipeline de análisis 
              de datos para la detección de variantes genéticas.
            </p>
          </VerticalTimelineElement>

          {/* Especialización */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#ef4444', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #ef4444' }}
            date="2023"
            iconStyle={{ background: '#ef4444', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
            title="Especialización en Analítica y Big Data"
            subtitle="I. U. Digital de Antioquia"
          >
            <p>
              Especialización enfocada en el análisis de datos y tecnologías de big data, 
              complementando mi formación en bioinformática con herramientas avanzadas de análisis.
            </p>
          </VerticalTimelineElement>

          {/* Q10 S.A.S */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3b82f6', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #3b82f6' }}
            date="Noviembre 2021 - Diciembre 2023"
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            title="Desarrollador"
            subtitle="Q10 S.A.S"
          >
            <p>
              Desarrollé soluciones ETL para la integración de datos, creé dashboards con Power BI 
              y desarrollé aplicaciones web utilizando ASP.NET, contribuyendo a la transformación 
              digital de la empresa.
            </p>
          </VerticalTimelineElement>

          {/* Compañía de galletas Noel */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3b82f6', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #3b82f6' }}
            date="Octubre 2020 - Diciembre 2020"
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            title="Operario de producción"
            subtitle="Compañía de galletas Noel"
          >
            <p>
              Verificación de calidad y empaque de producto terminado.
              Aplicación de estándares de calidad y buenas prácticas de manufactura.
            </p>
          </VerticalTimelineElement>

          {/* Billares la 53 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3b82f6', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #3b82f6' }}
            date="Agosto 2019 - Marzo 2020"
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            title="Administrador"
            subtitle="Billares la 53"
          >
            <p>
              Atención a clientes y proveedores, manejo de caja, control de personal,
              verificación de estándares y control de inventarios.
            </p>
          </VerticalTimelineElement>

          {/* Universidad Nacional */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#ef4444', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #ef4444' }}
            date="2019"
            iconStyle={{ background: '#ef4444', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
            title="Ingeniero Biológico"
            subtitle="Universidad Nacional de Colombia"
          >
            <p>
              Formación integral en ingeniería biológica, combinando conocimientos en biología, 
              programación y análisis de datos, sentando las bases para mi carrera en bioinformática.
            </p>
          </VerticalTimelineElement>

          {/* Koba Colombia S.A.S */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#3b82f6', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #3b82f6' }}
            date="Diciembre 2018 - Julio 2019"
            iconStyle={{ background: '#3b82f6', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            title="Practicante control de calidad"
            subtitle="Koba Colombia S.A.S"
          >
            <p>
              Controles de calidad mediante auditorías, implementación de planes de mejora,
              capacitación en BPM y normatividad sanitaria, control de trazabilidad.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline; 