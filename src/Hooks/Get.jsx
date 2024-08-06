import {useState } from 'react';
import axios from 'axios'
// const [cookies]=UseCookies(['jwtToken'])
const UseGet = () => {

    const [res, setRes] = useState()
    const get = async (url) => {
        try {
            const response = await axios.get(url
                // ,{ headers:{    Aouthorization:`Bearer ${cookies.jwtToken}` }}
                    )
            setRes(response.data)
        } catch (error) {
            console.error("error::", error)
        }
    }
    return [get, res];
}

export default UseGet
