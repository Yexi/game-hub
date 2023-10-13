import axios from "axios";


export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    'key': '02f10f80114c43a8bb444065cd5fbe6d'
  }
})