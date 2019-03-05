import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.github.com',
    headers:{
        'Accept': 'application/vnd.github.v3.text-match+json',
        'Authorization': 'token cc310dcf865ad4ec89be64c0298707c368750202'
    }
})
