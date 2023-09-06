import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const FetchData = ({ cat }) => {
    const [Data, setData] = useState("");
    const fetchdata = async () => {
        await axios
            .get(
                cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=f463419c4e4c4ebd96549c95688e979b`
                    : "https://newsapi.org/v2/top-headlines?country=in&apiKey=29fd802688a44af78fadd562ca88adf7"
            ).then((res) => setData(res.data.articles));
    };
    useEffect(() => {
        fetchdata();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cat]);


    return (
        <div style={{ margin: '120px auto', padding: '50px', border: '5px solid', borderRadius: '20px' }} className="container">
            <h1 style={{ textAlign: "center", textTransform: "capitalize" }}>
                <u>{cat} Top Headlines</u>
            </h1>
            <hr />
            <div style={{ flexWrap: "wrap", gap: "20px" }} className='container d-flex justify-content-center align-items-flex-start'>{Data ? Data.map((items, index) => (
                <>
                    <div className='card' style={{ maxWidth: "22rem", height: "fit-content", boxShadow: "2px 2px 10px 6px silver" }}>


                        <a style={{ textDecoration: "none", color: "#212529" }} target='_blank' rel="noreferrer" href={items.url}>
                            <Link to={items.url} target='_blank' />
                            <div style={{ maxWidth: "400px", maxHeight: "225px", objectFit: "cover" }}>
                                <img className='card-img-top' src={items.urlToImage} alt="Loading..." />
                            </div>
                            <p style={{ color: "#212529" }}>
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 21C4 17.4735 6.60771 14.5561 10 14.0709M19.8726 15.2038C19.8044 15.2079 19.7357 15.21 19.6667 15.21C18.6422 15.21 17.7077 14.7524 17 14C16.2923 14.7524 15.3578 15.2099 14.3333 15.2099C14.2643 15.2099 14.1956 15.2078 14.1274 15.2037C14.0442 15.5853 14 15.9855 14 16.3979C14 18.6121 15.2748 20.4725 17 21C18.7252 20.4725 20 18.6121 20 16.3979C20 15.9855 19.9558 15.5853 19.8726 15.2038ZM15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="#f83b17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>  <span>{items.author}</span>

                                <svg style={{ marginLeft: "18px" }} fill="#f83b17" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6,22H18a3,3,0,0,0,3-3V7a2,2,0,0,0-2-2H17V3a1,1,0,0,0-2,0V5H9V3A1,1,0,0,0,7,3V5H5A2,2,0,0,0,3,7V19A3,3,0,0,0,6,22ZM5,12.5a.5.5,0,0,1,.5-.5h13a.5.5,0,0,1,.5.5V19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1Z" /></svg>  <span>{items.publishedAt}</span>
                            </p>


                            <div className="card-body">
                                <h5 className="card-title">{items.title}</h5>
                                <p className="card-text">{items.description}</p>
                            </div>
                        </a>

                    </div>
                </>))
                : "Loading..."


            }
            </div>
        </div>


    );
};

export default FetchData;