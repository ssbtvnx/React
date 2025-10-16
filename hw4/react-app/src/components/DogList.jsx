import { useState } from "react"
import DogCard from "./DogCard"
import "./DogList.css"

function DogList() {
  const [dogs, setDogs] = useState([])
  const [search, setSearch] = useState("")

  const fetchDogs = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/20")
    const data = await res.json()
    setDogs(data.message)
  }

  const filteredDogs = dogs.filter((url) => {
    const breed = url.split("/")[4]?.toLowerCase() || "" 
    return breed.includes(search.toLowerCase())
  })

  const clearSearch = () => setSearch("")

  return (
    <div className="list-container">
      <button onClick={fetchDogs}>Load Dogs</button>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search breed..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button className="clear-btn" onClick={clearSearch}>
            ✕
          </button>
        )}
      </div>

      <ul>
        {filteredDogs.map((url, index) => {
          const breed = url.split("/")[4] || "Unknown"
          return <DogCard key={index} image={url} breed={breed} />
        })}
      </ul>
    </div>
  )
}

export default DogList
