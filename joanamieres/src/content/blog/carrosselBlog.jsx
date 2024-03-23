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
    const [articleClass, setArticleClass] = useState('articleArticle');
    const [contentArticle, setContentArticle] = useState('contentArticle');
    const [pesquisaValue, setPesquisaValue] = useState('');

    const handleCountPlus = () => {
        if (count < posts.length - 1) {
            setCount(count + 1);
        }
    };

    const handleCountMinus = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const setCountIndex = (index) => {
        setCount(index);
        handleArticle(index);
    };

    const handleArticle = (index) => {
        const post = posts[index];
        setTitle(post.title);
        setContent(post.content);
        setAuthor(post.author.displayName);
    };

    const handleArticleClass = () => {
        setArticleClass(articleClass === 'articleArticle' ? 'articleClassExpand' : 'articleArticle');
        setContentArticle(contentArticle === 'contentArticle' ? 'contentArticleExpand' : 'contentArticle');
    };

    const handlePesquisaSubmit = (e) => {
        e.preventDefault();
        pesquisarNoBlogger(pesquisaValue);
    };

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

    // Função para pesquisar publicações no Blogger
    async function pesquisarNoBlogger(query) {
        // URL da API do Blogger para pesquisa de postagens
        const url = `https://www.googleapis.com/blogger/v3/blogs/8511051469662116569/posts/search?q=${encodeURIComponent(query)}&key=AIzaSyAkVzMMylXqjqjVPJWBIIbsVEbYpTuF-aI`;

        try {
            // Faça a solicitação de pesquisa
            const response = await fetch(url);
            if (response.ok) {
                // Pesquisa bem-sucedida
                const responseData = await response.json();
                console.log('Resultados da pesquisa:', responseData);
                setPosts(responseData.items);
                setCount(0);
            } else {
                // Falha na pesquisa
                const errorMessage = await response.text();
                console.error('Erro na pesquisa:', errorMessage);
            }
        } catch (error) {
            console.error('Erro na pesquisa:', error);
        }
    }

    return (
        <section className="container">
            <div>
                <h1 className='containerTitle'>Tópicos</h1>
                <div className="postagensDiv">
                    <div className='containerPosts'>
                        <div className='postagensContainer'>
                            <form id='pesquisas' className='formPesquisas' onSubmit={handlePesquisaSubmit}>
                                <input type='text' className="pesquisaInput" placeholder="Digite sua pesquisa.." value={pesquisaValue} onChange={(e) => setPesquisaValue(e.target.value)} />
                                <button type="submit">Pesquisar</button>
                            </form>

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
