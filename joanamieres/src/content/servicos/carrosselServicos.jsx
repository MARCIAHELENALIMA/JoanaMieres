import { PlaceHolder2, Arrow, Foto1, Foto2, Foto3, Foto4, Foto5, Foto6 } from "../images/importsImg";
import { useState } from "react";

const Carrossel = () => {
    const [count, setCount] = useState(0);
    const imgs = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6];

    const handleCountPlus = () => {
        if (count < 5) {
            setCount(count + 1);
            console.log(count);
        }
    }

    const handleCountMinus = () => {
        if (count > 0) {
            setCount(count - 1);
            console.log(count);
        }
    }

    return (
        <>
            <span className='arrowBg'>
                <img src={Arrow} alt='Seta Esquerda' className='larrow arrow' onClick={handleCountMinus} />
            </span>
            <div className='carrosel'>
                {imgs.map((img, index) => (
                    <img
                        src={img}
                        key={index}
                        className={` ${count === index ? 'servicosCarrossel image-responsivo' : 'hidden'}`}
                        id={`alocation${index + 1}`}
                        alt={`Foto ${index + 1}`}
                    />
                ))}
                <div className='Content'></div>
                <ul className='alocationList'>
                    {[...Array(6)].map((_, index) => (
                        <li key={index} className={`alocation ${count === index ? 'active' : ''}`} id={`alocation${index + 1}`}></li>
                    ))}
                </ul>
            </div>
            <span className='arrowBg'>
                <img src={Arrow} alt='Seta Direita' className='rarrow' onClick={handleCountPlus} />
            </span>
        </>
    );
}

export default Carrossel;
