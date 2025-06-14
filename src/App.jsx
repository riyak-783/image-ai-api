import Home from './components/Home';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-blue-100 py-8 px-4">
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2'> AI Image Enhancer</h1>
        <p className='text-lg text-gray-400 '> Powered by PicWish AI</p>
      </div>
      <Home />
      <div className="text-sm text-gray-400 mt-6">
        Upload your image and let AI enhance to in seconds! Made with ❤️ by Riya.
        </div>
    </div>
  );
}

export default App;