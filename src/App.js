import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/scss/bootstrap.scss';
import DialogBox from './Projects/DialogBox/DialogBox';
// import Testimonial from './Projects/Testimonial/Testimonial';
import SlideToUnlock from './Projects/slide-to-unlock/SlideToUnlock';
import SliderToGrow from './Projects/SliderToGrow/SliderToGrow';

function App() {
  return (
    <div className="App">
     {/* <Testimonial/> */}
     {/* <SlideToUnlock/> */}
     <DialogBox/>
     {/* <SliderToGrow/> */}
    </div>
  );
}

export default App;
