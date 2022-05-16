import { useEffect, useState } from 'react'
// import Gallery from './gallery'
import ImageCard from './image-card'
import StyledButton from './styled-button'

const ImageGrid = ({ images = [] }: { images: Array<AirtableAttachment> }) => {
  images = images.filter((image) => image.width > image.height)

  const [open, setOpen] = useState(false)
  const closeModal = () => {
    setOpen(false)
  }

  const [smallScreen, setSmallScreen] = useState(false)
  useEffect(() => {
    if (window.innerWidth < 640) {
      setSmallScreen(true)
    }
  }, [])

  return (
    <div className="flex flex-col gap-y-4 px-4 items-center mt-4">
      <div className="grid grid-cols-1 gap-y-2 md:grid-cols-3 md:gap-x-2 xl:w-3/4 2xl:w-1/2 items-center">
        {smallScreen ? (
          <ImageCard image={images[0]} />
        ) : (
          images.map(
            (image, i) => i < 3 && <ImageCard image={image} key={image.url} />
          )
        )}
      </div>
      <button
        className="rounded-lg mx-auto py-2 px-2 font-bold text-l dark:text-gray-200 shadow-md dark:shadow-black/25 border-solid border-2 border-amber-400 dark:border-amber-500 p-2 px-4 text-center hover:scale-105 transform transition"
        onClick={(e) => {
          if (!e.metaKey) {
            e.preventDefault()
            setOpen(true)
          }
        }}
      >
        See all photos
      </button>
      {/* {open && <Gallery open={open} images={images} onClose={closeModal} />} */}
    </div>
  )
}

export default ImageGrid
