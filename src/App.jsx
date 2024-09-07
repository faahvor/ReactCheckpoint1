
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css'; // optional for custom styling

const firstName = "Avuwa"; // Change this to an empty string to test the fallback message

function App() {
  return (
    <div className="flex flex-col items-center mt-10 space-y-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-72 text-center">
        <Image />
        <h2 className="text-2xl font-semibold mt-4"><Name /></h2>
        <p className="text-gray-600 mt-2"><Description /></p>
        <h4 className="text-xl font-bold text-blue-600 mt-4"><Price /></h4>
      </div>
      <div className="text-center mt-6">
        <h2 className="text-2xl text-teal-400">{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h2>
        {firstName && (
          <img
            src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1725231238/Car_rentals/cars/pexels-pashal-337909_syhmwf.jpg"
            alt="placeholder"
            className="mt-4  h-[20rem] rounded-full"
          />
        )}
      </div>
    </div>
  );
}

export default App;
