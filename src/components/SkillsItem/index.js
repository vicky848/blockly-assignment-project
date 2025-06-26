import './index.css'


const SkillsItem = (props) => {
    const {skillDetails} = props

    const {category, skills} = skillDetails
  return (
   <li className='list-item'>
    <h3 className='category-heading'>{category}</h3>
    <ul className='list-container'>
        {
            skills.map((skill, indx)=> (
                <li key={indx}>{skill}</li>
            ))
        }
    </ul>


   </li>
  )
}

export default SkillsItem
