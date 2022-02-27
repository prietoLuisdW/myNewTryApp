import waImg1 from '../pictures/wa.png' 
export function Footer(){
    return(
        <div>
            <div className="bg-dark">
                <p>Null Nadita Nada</p>                
            </div>
            <a href="#" target="_blanck"><img src={waImg1} alt="Imagen whatsapp" className="wa"/></a>
        </div>
    )
}