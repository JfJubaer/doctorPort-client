import { useEffect, useState } from "react"

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:4000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('accessToken', data.accessToken);
                    setToken(data.accessToken);
                })
        }
    }, [email])
    return [token];
}
export default useToken;