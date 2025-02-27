import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


//data loaded for the help of corse , fetch done and chech  <h4>All Category: {categories.length}</h4>

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dragon-news-server-site-nu.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div>
            <h6>All Category: {categories.length}</h6>
            <div>
                {
                    categories.map(category => 
                    <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;
// 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥

//unique key is attribute of p ...<p Key={}>   *****   </p>
// map is here very charming , so notice it and try to understand 

// 💖💖💥🗼🗼🗽🌄🌄🚚🚚🚚🏡🔰🔱🌈🌈🌟🌟💥💥💥💥💥💥💥💥💥