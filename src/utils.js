import { proxyURL } from "./settings"

export function fetchCSV({ targetURL }) {
  return fetch(proxyURL + targetURL)
    .then((response) => response.text())
    .catch((error) => console.log("error", error))
}
