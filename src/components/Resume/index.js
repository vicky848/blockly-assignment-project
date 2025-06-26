import './index.css'

const Resume =  () => {
    return(
        <div className=' id = "resume"resume-main-container py-5 position-relative'>
            <div className='resume-container text-center'>

                <div className='row align-items-center'>
                    <div className=' text-center '>
                        
                        <div >
                          <h1 className='resume-heading'>My Resume</h1> 
                          <p>You can download my resume or view it online using the buttons below.</p>
                          <div>
                           <a href='/' download className='btn btn-warning  resume-buttom'>
                             Download Resume 
                           </a>
                           <a href='/' className='btn btn-dark'>  View Online</a>
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
export default Resume