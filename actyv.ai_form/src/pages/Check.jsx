import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Check = () => {
    const [name,setName] = useState('');
    const handleSubmit =(e) =>{
        console.log(name)
      //it works 
        e.preventDefault();
    }
  return (

    <form onSubmit={handleSubmit}>
        <ColorModeSwitcher />
        <div>
            <Input type='text' onChange={(e)=>setName(e.target.value)} placeholder='enter the name' />
        </div>
        <Button colorScheme={'blue'} type='submit'>Submit</Button>

    </form>
  )
}

export default Check