import { useEffect, useState } from 'react'

export function getBookmarks(ids) {
  return ids.map((id) => {
    return fetch('/datasets/' + id).then((response) => response.json())
  })
}

function getBookmarkIDs() {
  return JSON.parse(localStorage.getItem('bookmarks'))
}

export function setBookmark(id, setIsBookmarked) {
  setIsBookmarked(true)
  const bookmarks = getBookmarkIDs()

  bookmarks
    ? localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, id]))
    : localStorage.setItem('bookmarks', JSON.stringify([id]))
}

export function removeBookmark(id, setIsBookmarked) {
  setIsBookmarked(false)
  const bookmarks = getBookmarkIDs()
  const filteredBookmarks = bookmarks.filter((bookmark) => bookmark !== id)
  localStorage.setItem('bookmarks', JSON.stringify(filteredBookmarks))
  return filteredBookmarks
}

export function useBookmarkStatus(id) {
  const [isBookmarked, setIsBookmarked] = useState()
  useEffect(() => {
    const bookmarks = getBookmarkIDs()
    setIsBookmarked(bookmarks ? bookmarks.includes(id) : false)
  }, [id])
  return { isBookmarked, setIsBookmarked }
}
