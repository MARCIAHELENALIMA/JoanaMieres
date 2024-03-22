import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/blog.css';
import { ArrowWhite, Expantion, PlaceHolder2 } from '../images/importsImg';

const CarrosselBlog = () => {
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [articleClass, setArticleClass] = useState('articleArticle')
    const [contentArticle, setContentArticle] = useState('contentArticle')


    const handleCountPlus = () => {
        console.log("Antes da count fun:" + count)
        if (count < posts.length - 1) {
            console.log(count)
            handleArticle(count + 1)
        }
    };

    const handleCountMinus = (index) => {
        if (count > 0) {
            console.log("minus: " + count)
            handleArticle(count - 1)
        }
    };

    const setCountIndex = (index) => {
        setCount(index);
        handleArticle(index)
    };

    const handleArticle = (index) => {
        setCount(index)
        const post = posts[index];
        setTitle(post.title);
        setContent(post.content);
        setAuthor(post.author.displayName);
    };

    const handleArticleClass = () => {
        setArticleClass(articleClass === 'articleArticle' ? 'articleClassExpand' : 'articleArticle');
        setContentArticle(contentArticle === 'contentArticle' ? 'contentArticleExpand' : 'contentArticle');


    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://www.googleapis.com/blogger/v3/blogs/8511051469662116569/posts?key=AIzaSyAkVzMMylXqjqjVPJWBIIbsVEbYpTuF-aI'
                );
                setPosts(response.data.items);
            } catch (error) {
                console.error('Erro ao buscar posts:', error);
            }
        };
        fetchData();
    }, []);


    return (
        < section className="container">
            <div>
                <h1 className='containerTitle'>Tópicos</h1>
                <div className="postagensDiv">
                    <span className="Arrows" onClick={handleCountMinus}>
                        <img src={ArrowWhite} alt='RigthArrow' className='LeftArrow' onClick={handleCountMinus} />
                    </span>
                    <div className='containerPosts'>
                        <div className='postagensContainer'>
                            <div className='postagens'>
                                {posts.map((post, index) => (
                                    <div key={post.id} className={count === index ? 'postagem' : 'postagemOff'} onClick={() => setCountIndex(index)}>
                                        <img src={PlaceHolder2} className='promocaoImg' alt="" />
                                        <h3>{post.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <span className="Arrows" onClick={handleCountPlus}>
                        <img src={ArrowWhite} alt='RigthArrow' className='RigthArrow' onClick={handleCountPlus} />
                    </span>
                </div>
                <div className='LatestPost'>
                    <img src={PlaceHolder2} alt='Promoção' className='promocaoImg' />
                    <span>
                        <h3>Promoção!</h3>
                        <p>Descrição da promoção, fale sobre o que sua promoção dá!</p>
                    </span>
                </div>
            </div>
            <article className={articleClass}>
                <img src={Expantion} alt='Expandir' className='icon' onClick={handleArticleClass} />
                <span>
                    <h3 className='title' >{title}</h3>
                </span>

                <div className={contentArticle} dangerouslySetInnerHTML={{ __html: content }} />
            </article>
        </section>
    );
};

export default CarrosselBlog;
