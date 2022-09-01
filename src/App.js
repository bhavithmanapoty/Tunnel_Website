import ContactForm from "./ContactForm";
import Picture from "./images/Pic2 real.jpg";
import Picture2 from "./images/Pic1.jpg";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h2 className="text-center">WELCOME TO</h2>
        <h1 className="text-center">DIL KI DOSA</h1>
        <h3 className="text-center">
          SEND US AN EMAIL IF YOU ARE INTERESTED IN JOINING :)
        </h3>
        <ContactForm />
      </div>
    </div>
  );
};

export default App;
