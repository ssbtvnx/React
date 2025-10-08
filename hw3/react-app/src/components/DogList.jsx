import { useState } from "react"
import DogCard from "./DogCard"
import "./DogList.css"

function DogList() {
  const [dogs, setDogs] = useState([])

  const fetchDogs = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/8")
    const data = await res.json()
    setDogs(data.message)
  }

  return (
    <div className="list-container">
      <button onClick={fetchDogs}>Load Dogs</button>
      <ul>
        {dogs.map((imgUrl, index) => (
          <DogCard key={index} image={imgUrl} />
        ))}
      </ul>
    </div>
  )
}

export default DogList
