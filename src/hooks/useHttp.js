import axios from "axios"
import { useState } from "react"

const useHttp = () => {
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    const makeRequest = async (config, applyData) => {
        const { url, method, data } = config

        setLoading(true)
        try {
            const response = await axios({
                method: method,
                url: url,
                data: data
            })

            applyData(response.data)
        } catch (err) {
            setError(err)
        }
        setLoading(false)
    }

    return { loading, error, makeRequest }
}

export default useHttp
