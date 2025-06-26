import './index.css'


const ProjectItem = (props) => {
    const {projectDetails} =  props
    const {title, description, github } = projectDetails
  return (
    <li className='list-item'>
          <div >
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mt-auto"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
      
    </li>
  )
}

export default ProjectItem
