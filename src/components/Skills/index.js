import SkillsItem from '../SkillsItem'
import './index.css'

const Skills =  () => {


    const skillsData = [
        {
            category: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js']

        },
        {
            category: 'Backend', skills: ['Node.js', 'Express.js', 'Python', ]

        },
        {
            category: 'Database ', skills: ['SQL']

        },


    ]




    return(
        <div className=' id = "skill" py-5'>
            <div className='skills-container text-center'>

                <div>
                    <div className=' text-center '>
                        
                        <div >
                          <h1 className='skill-heading'>Skills</h1> 
                          
                          <div className='row'>
                            <ul className='list-container'>
                                {
                                    skillsData.map((eachItem, index) => (
                                        <SkillsItem
                                        key={index}
                                        skillDetails = {eachItem}

                                        />
                                    ))
                                }
                            </ul>
                           
                          </div>

                        </div>

                    </div>

                </div>

            </div>

            <div>

            </div>

        </div>
    )
}
export default Skills