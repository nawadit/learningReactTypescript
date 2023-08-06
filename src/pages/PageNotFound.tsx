import {Link} from 'react-router-dom'
export const PageNotFound = () =>{
return(
    <div className='flex flex-col align-middle items-center justify-center'>
        <div className="font-extrabold text-4xl sm:text-8xl w-full p-5 mt-20 text-center">
        Page Not Found
      </div>
      <Link to='/' className="font-extrabold rounded-2xl w-fit bg-violet-400 m-2 p-2 text-sm sm:text-4xl sm:p-5 sm:mt-20 text-center hover:scale-105 active:scale-95"> 👈🏽Go back to home</Link>
    </div>
)
}