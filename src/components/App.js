import React from 'react'
import Article from './Article'
import articles from './fixtures'

function App() {
    return(
        // <div>
        //     <h1>App Name</h1>
        //     <ArticleList article={articles[0]} foo="bar" flag={true}/>
        // </div>
        <div>
            <h1>App Name</h1>
            <Article articles = {articles[0]}/>
        </div>
    )
}

export default App;