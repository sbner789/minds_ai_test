import { useEffect, useState } from "react";
import CommonApiService from "./api_service";

const useData = () => {
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem('todoData');
        return savedData ? JSON.parse(savedData) : [];
    })
    
    useEffect(() => {
        if (data.length === 0) {
            const getData = async () => {
                try {
                    await CommonApiService.getData()
                        .then(res => {
                            setData(res.data)
                        })
                } catch (e) {
                    console.log(e)
                }
            }
            getData()
        }
    },[data.length])

    return { data, setData }
}
export default useData