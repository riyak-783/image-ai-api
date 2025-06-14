const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
          props.UploadImageHandler(file);
    }
};

  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
        <label className='block w-full cursor-pointer border-2 border-dashed border-gray-300 text-gray-700 text-lg font-semibold p-6 text-center hover:border-blue-400 transition-all'
         htmlFor="fileInput">
            <input type="file" id="fileInput" className='hidden' onChange={ShowImageHandler} />
            
            <span className='text-lg font-medium text-gray-600'> Click and Drag to upload your image</span>

            </label>
    </div>
  )
}

export default ImageUpload