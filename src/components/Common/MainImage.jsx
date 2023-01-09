import React from 'react';
import Header from '../Common/Header';
import ImgBackground from '../../assets/img/Group 2218.png';

function MainImage() {
    return (
        <>
            <div class="main-image" style={{ backgroundColor: 'white'}}>
                <Header />
                <img style={{ width: '70%',marginLeft:'30%' ,height: '40vw', borderRadius:'10px'}} src={ImgBackground} alt="" />
                <div class="text">
                    <h1 style={{ fontFamily: 'arial'}}>Top Gun Maverick</h1> 
                    <p style={{ fontSize: '1.2vw', marginTop:'2vw', width: '37%'}}>
                    Top Gun: Maverick is a 2022 American action drama 
                    film directed by Joseph Kosinski and written by
                     Ehren Kruger, Eric Warren Singer, and Christopher McQuarrie.
                    Thirty years of service leads Maverick 
                    to train a group of elite TOPGUN graduates 
                    to prepare for a high-profile mission while 
                    Maverick battles his past demons.In the film, 
                    Maverick confronts his past while training 
                    a group of younger Top Gun graduates, including
                    the son of his deceased best friend, for a dangerous mission.</p><br />
                    <p className="rating"> <span className='percent'>8.3</span>/10 IMDb, <span className='percent'> 96% </span> Rotten Tomatoes, <span className='percent'>78%</span> Metacritic. <br /> Release date: 27 May 2022 (USA) <br /> Director: Joseph Kosinski</p>
                 
                   
                   <a href="https://www.youtube.com/watch?v=giXco2jaZ_4" target="_blank"><button>Watch Now</button></a>
                </div>
            </div>
        </>
    );
}

export default MainImage;
