// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {List, stateChange, isActive} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = List
  const imageShow = () => {
    stateChange(imageUrl, imageAltText, isActive)
  }
  const status = () => (isActive ? 'button1' : 'button2')

  return (
    <li className="image-card">
      <button className={status} type="button" onClick={imageShow}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image-2" />
      </button>
    </li>
  )
}

export default ThumbnailItem
