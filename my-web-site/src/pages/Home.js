import Computer from './img/computer.jpg';
export default function Home() {
  return (
    <div className='container mb-5' style={{marginTop: '110px'}}>
      <div className="row align-items-center">
      <div className='col-md-8'>
        <img src={Computer} alt="logo" className="img-fluid" style={{width: '100%'}}/>
          
        </div>
        <div className="col-md-4 mt-md-0 mt-5">
          <p className='text-light h1'>Diego Alexander Acetún Chicol</p>  
          
          <p className='text-light h3'>Desarrollador Web con experiencia en proyectos desarrollados en la Universidad</p>
      
        </div> 
      </div>
    </div>
  );
}
