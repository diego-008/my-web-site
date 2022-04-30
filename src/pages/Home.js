import Computer from './img/computer.jpg';
export default function Home() {
  return (
    <div className='container mt-auto'>
      <div className="row align-items-center" style={{marginTop: '110px', marginBottom: "10px"}}>
      <div className='col-md-8'>
        <img src={Computer} alt="logo" className="img-fluid animate__animated animate__heartBeat" style={{width: '100%'}}/>
          
        </div>
        <div className="col-md-4 mt-md-0 mt-3 animate__animated animate__bounceInDown">
          <p className='text-light h1'>Diego Acetún</p>  
          
          <p className='text-light h3'>Desarrollador Web con experiencia en proyectos desarrollados en la Universidad</p>
      
        </div> 
      </div>
    </div>
  );
}
