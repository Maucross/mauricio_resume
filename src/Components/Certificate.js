import {useState} from 'react';

const Certificate = (props) => {
    const [show,setShow] = useState(false)

    const mostrar = ()=>{
        if (show == true){
            setShow(false)
        }else{
            setShow(true)
        }
    }
    
    return (
        <div className='mycertification'>
            <img onClick={mostrar} className='certificate' alt={props.name}src={props.img}></img>
            {
                show && (
                    <div className='therealbackground'>
                        <div className='close' onClick={mostrar}>X</div>
                        <img className="therealImage" alt={props.name} src={props.img}/>
                    </div>)
            }
            <p>{props.title}</p>
        </div>
    );
}

export default Certificate;
