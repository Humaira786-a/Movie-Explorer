function SearchBar({search,setSearch}){


return (

<div className="
flex
justify-center
px-6
py-4
bg-white dark:bg-gray-950
">

<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="🔍 Search movies..."

className="
w-full
md:w-1/2
p-3
rounded-lg
bg-white dark:bg-gray-950
text-gray-600
border-red-600
border-2
outline-none
"

/>

</div>

)

}

export default SearchBar;