import "./App.css";
import Header from "./component/Header";
import Slider from "./component/Slider";

function App() {
  const mockImagenes = [
    "https://picsum.photos/id/1020/400",
    "https://picsum.photos/id/1025/400",
    "https://picsum.photos/id/1010/400",
  ];
  return (
    <div>
      <Header />;
      <Slider imagenes={mockImagenes} />;
    </div>
  );
}

export default App;
