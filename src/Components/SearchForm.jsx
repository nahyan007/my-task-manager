import { TbListSearch } from 'react-icons/tb'
import { useState } from 'react';

const SearchForm = () => {

    const [taskSearch, setTaskSearch] = useState('');




  return (
    <form >
        <input 
        className='task__input'
        type="text" 
        name="search" 
        placeholder='Search your task'
        
        />

        <button 
        type="submit"
        className='task__btn'
        >
        <TbListSearch />
        </button>
        

    </form>
  )
}

export default SearchForm