import axios from 'axios'
const UsePost = () => {
    const Post = async (url, data) => {
        try {
            console.log("try const UsePost", data);
        //  const Token=   await axios.post(url, data)
        //  console.log("token",Token);
        // debugger
     await axios.post(url, data)
        } catch (error) {
            console.log("error");
            console.error("error:::",error)
        }
    }
    return Post
}

export default UsePost


