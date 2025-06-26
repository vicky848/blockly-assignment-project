import './index.css'

const Hero = () => {

    return(
        <div className='text-center'>
            <div className='container '>
                
                <p className='lead'>Hello!</p>
                
              <div className='card-container'>
                 <div>
                <h1 className='hero-heading'>I'm <span className='text-warning'>Vicky 👋</span></h1>
                <p>Frontend Developer | <br/> React.js, JavaScript, HTML, CSS | Full Stack Developer (CCBP 4.0 Certified) Based in India</p> 
                
                 <a href='/resume.pdf' target='_blank' className='btn btn-warning me-2 m-4'>Download Resume</a>
                <a href='#contact' className='btn btn-dark touch-buttom m-4'>Get in Touch</a>

               </div>
               <div className='photo-container'>
                    <img src='image/photo.png' alt='vicky' className='rounded-circle' width='150'/>

                </div>

              </div>


            </div>

        </div>
    )
}

export default Hero