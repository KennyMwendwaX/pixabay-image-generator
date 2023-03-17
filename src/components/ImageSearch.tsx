import { useState, FormEvent } from "react"
import { HiOutlineSearch } from "react-icons/hi"

interface Props {
  searchText: (text: string) => void
}

export default function ImageSearch({ searchText }: Props) {
  const [text, setText] = useState<string>("")

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchText(text)
  }
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HiOutlineSearch className="w-5 h-5 text-gray-500" />
          </div>
          <input
            onChange={(e) => setText(e.target.value)}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Images..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
