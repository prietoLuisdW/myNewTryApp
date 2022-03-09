import waImg1 from '../pictures/wa.png' 
export function Footer(){
    return(
        <div className='py-2 bg-dark'>
            <div className="ps-2 bg-dark">
                <p className='fs_small mb-0 fw-light fc_grey'>Evelu Colombia</p>                
                <p className='fs_small fw-light fc_grey'>Todos los derechos reservados</p>                
            </div>
            <a href="#" target="_blanck"><img src={waImg1} alt="Imagen whatsapp" className="wa"/></a>
        </div>
    )
}