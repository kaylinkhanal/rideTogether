import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './login'
import { useSelector } from 'react-redux'
import Users from './users'
import Rider from './rider'
import Admin from './admin'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {token,role} = useSelector(state=> state.user)
  const AuthorizedScreen=()=>{
    debugger;
    switch(role){

      case 'user':
        return <Users/>
      case 'admin':
        return <Admin/>
      case 'rider':
        return <Rider/>
    }
  }
  
  if(token){
         return <AuthorizedScreen/>
    }
      return (<Login/>)

 
}
