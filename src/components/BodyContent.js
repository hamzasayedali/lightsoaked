import React from 'react';

import text from '../posts/posts.js';

const BodyContent = () => {
    return(
        <div className="body_content">
            <h1>Body</h1>
            {
                text.map(t=>(
                    <div>

                    <h2>{t.title}</h2>
                    <p>{t.content}</p>
                    </div>
                ))
                
            }
            
        </div>
    );
}

export default BodyContent;