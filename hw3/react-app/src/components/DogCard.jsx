import "./DogCard.css"

function DogCard({image}) {
  return (
    <li className="card">
      <img src={image} alt="Dog" />
      <p>Looking for the owner</p>
    </li>
  )
}

export default DogCard;