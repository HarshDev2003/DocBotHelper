import { useEffect, useState } from 'react'

export default function NextPage() {
  const [fileData, setFileData] = useState(null)

  useEffect(() => {
    // Retrieve the file data from local storage
    const storedFile = localStorage.getItem('uploadedFile')
    if (storedFile) {
      setFileData(storedFile)
    }
  }, [])

  return (
    <div>
      <h1>Next Page</h1>
      {fileData ? (
        <object data={fileData} type="application/pdf" width="100%" height="500px">
          <p>Your browser does not support PDFs. <a href={fileData}>Download the PDF</a>.</p>
        </object>
      ) : (
        <p>No file uploaded</p>
      )}
    </div>
  )
}
