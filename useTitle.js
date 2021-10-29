import {useEffect} from 'react'

const useTitle = (counts) => {

    useEffect(() => {
        if(counts>=1){
            document.title=`Chats (${counts})`;
        }
        else{
            document.title=`Chats`;
        }
       
    }, [counts]);


}

export default useTitle;
