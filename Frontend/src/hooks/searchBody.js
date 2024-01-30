import { useEffect } from 'react';
// const axios = require('axios');

export function useAnswer(searchTerm){
      const [answer, setAnswer] = useState("");
      useEffect(async ()=>{
            const ans = await axios.post("http://localhost:3002/search",{
                  textInput: searchTerm
            })
            setAnswer(ans);
      },[searchTerm])
      return answer;
}