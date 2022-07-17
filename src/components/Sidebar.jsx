import React from 'react';
import "./sidebar.css";
import {Link} from "react-router-dom";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <li>
          <ul><Link to={"/"}>About me</Link></ul>
          <ul><Link to={"/experience"}>Experience</Link></ul>
          <ul><Link to={"/projects"}>Projects</Link></ul>
          <ul><Link to={"/certifications"}>Certifications</Link></ul>
          <ul><Link to={"/hobbies"}>Hobbies</Link></ul>
        </li>
    </div>
  )
}
