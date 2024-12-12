import './index.css'
import {NavLink} from 'react-router-dom'
function Head(){
    return( 
        <div id="head1">
            
                <NavLink to='/dashboard' className={({isActive})=>(isActive?'red':"")}><li>dashboard</li></NavLink>
                <NavLink to='/sign' className={({isActive})=>(isActive?'red':"")}><li>sign</li></NavLink>
                <NavLink to='/login' className={({isActive})=>(isActive?'red':"")}><li>login</li></NavLink>
                <NavLink to='/home' className={({isActive})=>(isActive?'red':"")}><li>Home</li></NavLink>
            
        </div>
    )
            
}
export default Head;