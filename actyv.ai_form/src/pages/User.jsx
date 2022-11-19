import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Text } from '@chakra-ui/react'

const User = () => {
    const [data, setData] = useState([])
console.log(data)
    useEffect(() => {
        axios.get('http://localhost:8000/register/all')
            .then((res) => setData(res.data))
    }, [data.length])
    return (
        <Box textAlign='center'>

            {data.length > 0? (
                data.map((el) => {
                    <Text>{el.name}</Text>
                })
            ):(
            ''
        )}
        </Box>
    )
}

export default User