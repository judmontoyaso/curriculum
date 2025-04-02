import React, { useState } from 'react';

const VerticalTimeline = ({ children }) => {
  return (
    <div className="vertical-timeline">
      {children}
    </div>
  );
};

const VerticalTimelineElement = ({ 
  children, 
  className, 
  contentStyle, 
  contentArrowStyle, 
  date, 
  iconStyle, 
  icon,
  title,
  subtitle
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Extraer el año de la fecha
  const year = date.split(' - ')[0].split(' ').pop();

  return (
    <div className={`vertical-timeline-element ${className}`}>
      <div className="vertical-timeline-element-icon" style={iconStyle}>
        {icon}
      </div>
      <div 
        className={`vertical-timeline-element-content ${isExpanded ? 'expanded' : ''}`} 
        style={contentStyle}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="vertical-timeline-element-content-arrow" style={contentArrowStyle} />
        <div className="vertical-timeline-element-date">{date}</div>
        <div className="timeline-header">
          <h3 className="vertical-timeline-element-title">
            {title} <span className="year">({year})</span>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
        </div>
        {isExpanded && (
          <div className="timeline-content">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export { VerticalTimeline, VerticalTimelineElement }; 