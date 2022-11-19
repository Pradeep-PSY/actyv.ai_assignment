import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Flex, Text } from '@chakra-ui/react'

const User = () => {
    const [data, setData] = useState([])
console.log(data)
    useEffect(() => {
        axios.get('http://localhost:8000/register/all')
            .then((res) => setData(res.data))
    }, [])
    return (
        <Box textAlign='center'>

           
        {
            data && data.map((el) => (
               <Box m={2} border={'1px'}>
                    <Text>Name:{el.name}</Text>
                    <Text>PhoneNumber:{el.phone}</Text>
                    <Text>PhoneNumber:{el.email}</Text>

               </Box>
            ))
        }
        </Box>
    )
}

export default User