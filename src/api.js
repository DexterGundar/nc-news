import axios from 'axios'

const newsApi = axios.create({ baseURL: 'https://news-service-alcf.onrender.com/api'})

// Articles API
export const getArticles = () => {
    return newsApi.get('/articles')
    .then((res)=>{
        return res.data.articles
    })
}

export const getTopics = () => {
    return newsApi.get('/topics')
    .then((res)=>{
        return res.data.topics
    })
}