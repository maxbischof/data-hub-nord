import React, { useEffect, useState } from 'react'
import DatasetList from './DatasetList'

export default function BookmarksList() {
  const [bookmarks, setBookmarks] = useState()

  useEffect(() => {
    const bookmarkIDs = JSON.parse(localStorage.getItem('bookmarks'))
    Promise.all(getBookmarks(bookmarkIDs)).then((response) =>
      setBookmarks(response)
    )
  }, [])

  function getBookmarks(ids) {
    return ids.map((id) => {
      return fetch('/datasets/' + id).then((response) => response.json())
    })
  }

  return (
    <>
      {bookmarks && (
        <DatasetList
          datasets={bookmarks}
          headline={'Meine Datensätze'}
          showMoreButton={false}
        />
      )}
    </>
  )
}
