import ContactForm from './ContactForm';
import Picture from './images/Pic2 real.jpg'
import Picture2 from './images/Pic1.jpg'

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
      <h1 className='text-center'>ENJOY YOUR TIME AT THE TUNNELS!</h1>
        <img className='Image' src={Picture} alt={"Funny Image"}></img>
        <img className='Image' src={Picture2} alt={"Funny Image"}></img>
        <h2 className='text-center'>Send a message to the Artist :)</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
