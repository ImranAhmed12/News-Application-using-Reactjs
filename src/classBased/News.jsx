import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./mystyle.css"
export default class News extends Component {
    constructor() {
        super()
        this.state = {
            articals: []
        }
    }
    async getArticals() {
        var rawdata = await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&from=2022-04-03&sortBy=publishedAt&apiKey=777559d3795d48f48f4ed5c9949621fe`)
        var data = await rawdata.json()
        console.log(data);
        this.setState({ articals: data.articles })
    }
    componentDidMount() {
        this.getArticals()
    }
    componentDidUpdate(old){
        if(old.category!=this.props.category)
        this.getArticals()
    }
    render() {
        return (
            <>
                <h1 className="background text-light mt-2 p-1 text-center mb-3">News</h1>
                <div className="container-fluid">
                    <div className="row">
                        {
                            this.state.articals.map((item, index) => {
                                return <NewsItem
                                    title={item.title}
                                    Author={item.author}
                                    description={item.description}
                                    image={item.urlToImage}
                                    url={item.url}
                                    key={index}
                                />
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}