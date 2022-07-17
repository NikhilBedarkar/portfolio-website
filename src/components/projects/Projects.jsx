import React from 'react';
import './projects.css';
import dateFormat from 'dateformat';

export default function Projects(props) {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="p">
      <div className="p-name">{props.name.toUpperCase()}</div>
      <div className="p-desc">{props.description}</div>
      <div className="p-dates">
      <div className="p-created">
        <label htmlFor="p-created">Created : </label>
        <p id="p-created">{dateFormat(props.created_at, "mmmm dS, yyyy")}</p>
      </div>
        <div className="p-updated">
        <label htmlFor="p-updated">Last updated : </label>
        <p id="p-updated">{dateFormat(props.updated_at, "mmmm dS, yyyy")}</p>
           </div>
      </div>
      <div className="p-button"><button onClick={() => openInNewTab(props.html_url)} className="p-btn">View Project</button></div>
      </div>
  )
}
