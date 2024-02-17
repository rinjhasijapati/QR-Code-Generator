import InputForm from "./components/InputForm";


function App() {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen pt-36 px-2'>
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputForm />
          <h1>QR Code</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

/*19:56*/