import React from "react"
import "../stylesheets/Blog.css"
import "../stylesheets/ContainerTemplates.css"
import Article from "../Cards/Article";


class Blog extends React.Component {

    state = {
        articles: [
            {
                id: 1,
                title: "How to win the lottery with Python",
                url: "https://ben-garlock.medium.com/how-to-win-the-lottery-with-python-2d6c5fb5b057",
            },
            {
                id: 2,
                title: "Rails to Django",
                url: 'https://ben-garlock.medium.com/rails-to-django-c0748582c22f',

            },
            {
                id: 3,
                title: "How to win the lottery with Python",
                url: 'https://ben-garlock.medium.com/rails-to-django-c0748582c22f',
            },
            {
                id: 4,
                title: "Creating a native app and GUI with TKinter",
                url: 'https://ben-garlock.medium.com/creating-a-native-app-and-gui-with-tkinter-e5ad5a38c77d',
            },
            {
                id: 5,
                title: "CSS Grid",
                url: 'https://ben-garlock.medium.com/creating-a-native-app-and-gui-with-tkinter-e5ad5a38c77d',
            },
            {
                id: 6,
                title: "An intro to Selenium",
                url: 'https://ben-garlock.medium.com/selenium-is-a-pathway-to-the-dark-side-106a4bc80cbb',
            },
            {
                id: 7,
                title: "An intro to the Django REST framework",
                url: 'https://ben-garlock.medium.com/getting-up-and-running-with-the-django-rest-framework-fa560547e48f',
            },
            {
                id: 8,
                title: "Dynamic Programming",
                url: 'https://ben-garlock.medium.com/dynamic-programming-5dd99abb0612',
            },

        ]

    }

    renderAricles = () => {
        return this.state.articles.map(article => <Article key={article.id} article={article}/>)
    }

    render() {
        return(
            <div id="page-wrapper">
                <div className="buffer"></div>
                <div className="page-header">- BLOG -</div>
                <div className="content-wrapper-blog">
                    <div id="article-wrapper">
                        {this.renderAricles()}
                    </div>

                </div>
            </div>
        )
    }
}

export default Blog