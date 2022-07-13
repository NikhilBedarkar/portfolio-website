import React,{ useEffect, useState } from 'react';
import './projectList.css';
import Projects from '../projects/Projects';
import axios from 'axios';

export default function ProjectList() {
    const [repoList, setrepoList] = useState([]);

    useEffect(() => {
        axios
          .get(
            "https://api.github.com/users/NikhilBedarkar/repos"
          )
          .then((res) => {
            setrepoList(res.data);
          })
          .catch((error) => console.log(error));
      });

  return (
    <div className='pl'>
        <div className="pl-header"> Projects </div>
        <div className="pl-text">This are my projects, I worked on.</div>
        <div className="pl-projects">
        {repoList.map((repo) => {
            return(
                <Projects key={repo.id}
                 name= {repo.name} 
                 description={repo.description}
                 html_url={repo.html_url}
                 created_at={repo.created_at}
                 updated_at={repo.updated_at}
                 />
            );}
        )}
        </div>
    </div>
  )
}
