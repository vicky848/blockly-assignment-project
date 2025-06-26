import './index.css'
import ProjectItem from '../ProjectItem';
const Projects = () => {

  const projects = [
  {
    title: 'Wikipedia Search Application',
    description: 'Search Wikipedia with a responsive interface built using HTML, CSS, JS, Bootstrap and REST API. Features async fetch, new tab result view, and mobile-friendly layout.',
    github: 'https://github.com/vicky848/wikipedia_search_app',
  },
  {
    title: 'Chatbot',
    description: 'An interactive chatbot built using HTML, CSS, Bootstrap, and JS. Uses DOM manipulation and array methods to give predefined replies.',
    github: 'https://github.com/vicky848/chatbot_project',
  },
  {
    title: 'Jobby App',
    description: 'React-based job search app with login/authentication (JWT), routing, protected pages, and REST API integration.',
    github: 'https://github.com/vicky848/jobby_app',
  },
  {
    title: 'Gym Fluencer',
    description: 'A ReactJS fitness community platform to share workouts and plans. Fully responsive using Bootstrap and modern React.',
    github: 'https://github.com/vicky848/gym_fluencer',
  }
];





  return (
    <div className='project-container py-5 position-relative' id='project' >
         <div className='project-container text-center'>

                <div className='row align-items-center'>
                    <div className=' text-center '>
                        
                        <div >
                          <h1 className='projects-heading'>Project</h1> 
                          
                          <div className='row'>
                            <ul className='list-container'>
                                {
                                    projects.map((eachItem, index) => (
                                        <ProjectItem
                                        key={index}
                                        projectDetails = {eachItem}

                                        />
                                    ))
                                }
                            </ul>
                           
                          </div>

                        </div>

                    </div>

                </div>

            </div>

      
    </div>
  )
}

export default Projects
