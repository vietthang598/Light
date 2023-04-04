import axios from 'axios';

export default axios.create({
    baseURL:'https://io.adafruit.com/api/v2/Phanes/feeds/bbc-temp',
    headers:{
        Authorization: 'aio_FiFF13pyCDT4dh6hjiw3u2LQiHyy'
    }
});