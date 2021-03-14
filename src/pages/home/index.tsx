import React from 'react'
import { BlogItem } from '../../components/moleculs/blogItem'

interface Props{

}

const Home: React.FC<Props> = () => {
    return (
        <div className="flex flex-wrap gap-4 ml-14 mt-2">
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
            <BlogItem />
        </div>
    );
}

export default Home;