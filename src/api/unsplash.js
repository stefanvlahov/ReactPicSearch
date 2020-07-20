import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID UJMZo3EcPd0Ieyxb6r63u4ig2tbU4kEiKHRwciPv2xw'
    }
});