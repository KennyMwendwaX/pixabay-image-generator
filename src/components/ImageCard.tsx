import { FaEye, FaHeart } from "react-icons/fa"
import { HiDownload } from "react-icons/hi"

export interface Image {
  id: string
  name: string
  webformatURL: string
  user: string
  tags: string
  views: number
  downloads: number
  likes: number
}

interface Props {
  image: Image
}

export default function ImageCard({ image }: Props) {
  const tags = image.tags.split(",")

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <div>
          <div className="inline-flex items-center mr-4">
            <FaEye className="text-blue-500 w-5 h-5" />
            &nbsp;
            {image.views}
          </div>
          <div className="inline-flex items-center mr-4">
            <HiDownload className="text-blue-500 w-5 h-5" />
            &nbsp;
            {image.downloads}
          </div>
          <div className="inline-flex items-center">
            <FaHeart className="text-red-500 w-5 h-5" />
            &nbsp;
            {image.likes}
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}
