import "./DogCard.css"

function DogCard({ image, breed }) {
  return (
    <li className="card">
      <img src={image} alt={breed} />
      <p>{breed}</p>
    </li>
  )
}

export default DogCard

