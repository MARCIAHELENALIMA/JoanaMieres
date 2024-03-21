import { PlaceHolder2, Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, ArrowWhite } from '../images/importsImg'
import { useState } from 'react';
import '../css/blog.css'
const CarrosselBlog = () => {
    const [count, setCount] = useState(0)
    const imgs = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6];
    const handleCountPlus = () => {
        if (count < 5) {
            const sum = count + 1
            setCount(sum)
            console.log(count)
        }
    }
    const handleCountMinus = () => {
        if (count > 0) {
            const minus = count - 1
            setCount(minus)
            console.log(count)
        }
    }
    const setCountIndex = (index) => {
        setCount(index)

    }

    return (
        <>
            <h1>Postagens</h1>
            <div className="postagensDiv">
                <span className="Arrows" onClick={handleCountMinus}>
                    <img src={ArrowWhite} alt='LeftArrow' className='LeftArrow' onClick={handleCountMinus} />
                </span>
                <div className='postagensContainer'>
                    <div className='postagens'>
                        {imgs.map((img, index) => (
                            <div className={count === index ? 'postagem' : 'postagemOff'} onClick={() => setCountIndex(index)}>
                                <img src={img} alt='ThumbnailPost' className='ThumbnailPost' />
                                <h3>Titulo Postagem</h3>

                            </div>
                        ))}
                    </div>
                    <ul>
                        {[...Array(6)].map((index) => (
                            <li key={index} className={`alocation ${count === index ? 'active' : 'hidden'}`} id={`alocation${index + 1}`}>a</li>
                        ))}
                    </ul>
                </div>
                <span className="Arrows" onClick={handleCountPlus}>
                    <img src={ArrowWhite} alt='RigthArrow' className='RigthArrow' onClick={handleCountPlus} />
                </span>

            </div>
        </>
    );
}

export default CarrosselBlog;