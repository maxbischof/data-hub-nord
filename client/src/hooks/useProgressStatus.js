import { useEffect, useState } from 'react'

export function useProgressStatus(progressLength) {
  const [progress, setProgress] = useState()
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    progress % 20 === 0 &&
      setPercent(Math.round(progress / (progressLength / 100)))
  }, [progress, progressLength])

  return { percent, setProgress }
}
