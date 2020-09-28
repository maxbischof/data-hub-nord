import React, { useEffect, useState } from 'react'
import DatasetList from './DatasetList'
import { getBookmarks } from '../lib/bookmarks'

export default function BookmarksList() {
  const [bookmarks, setBookmarks] = useState()

  useEffect(() => {
    const bookmarkIDs = JSON.parse(localStorage.getItem('bookmarks'))
    bookmarkIDs &&
      Promise.all(getBookmarks(bookmarkIDs)).then((response) =>
        setBookmarks(response)
      )
  }, [])

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
