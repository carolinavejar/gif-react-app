import { useState} from 'react'

export const useFetchGIF = () => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    setTimeout(() => {
        setstate({
            data: [11,12],
            loading: false
        })
    }, 3000);

    return state;  
    //  state 
    // ========
    // {
    //     data: [],
    //     loading: true
    // }
}
