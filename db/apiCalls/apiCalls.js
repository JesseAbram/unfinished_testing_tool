import axios from 'axios';
// const {errorLogger} = require("./logging")


export const post = async (data, route) => {

const url = `http://localhost:3001/transactions/${route}`

try {
    const response = await axios({
        method: 'post',
        url,
        data

    });
} catch (e) {
    console.log(e.message)
}

}

