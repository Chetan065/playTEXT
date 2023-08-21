
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
    {/* Navbar */}
    <Navbar/>
<div className="container m-auto my-5">
  {/* TextBox to Enter any Text */}
  <Textarea/>
</div>
    
    </>
  );
}

export default App;
