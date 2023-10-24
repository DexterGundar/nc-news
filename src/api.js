import axios from 'axios'

const newsApi = axios.create({ baseURL: 'https://news-service-alcf.onrender.com/api'})

// Articles API
export const getArticles = () => {
    return newsApi.get('/articles')
    .then((res)=>{
        return res.data.articles
    })
}
export const getArticleById = (article_id) =>{
    return newsApi.get(`/articles/${article_id}`)
    .then(({data}) =>{
        return data.article;
    })
}

export const patchArticleVotes = (article_id, votesToPatch) => {
    const voteUpdate = { inc_votes: votesToPatch };
    return newsApi.patch(`/articles/${article_id}`, voteUpdate)
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        return Promise.reject(error);
})
}


export const getTopics = () => {
    return newsApi.get('/topics')
    .then((res)=>{
        return res.data.topics
    })
}

export const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
    .then((res)=>{
        return res.data.comments
    })
}

export const getUsers = () => {
    return newsApi.get('/users', {params: {
        sort_by: 'username'
    }})
    .then((res) => {
        return res.data.users
    })
}