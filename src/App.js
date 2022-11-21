import "./App.css";
import Header from "./component/Header";
import Carousel from "./component/Carousel";

function App() {
  const images = [
    {
      id: "1",
      title: "recuerdo",
      image:
        "https://www.xtrafondos.com/wallpapers/resoluciones/20/paisaje-digital-en-atardecer_2560x1440_5846.jpg",
    },
    {
      id: "2",
      title: "recuerdo2",
      image:
        "https://besthqwallpapers.com/Uploads/2-4-2022/197191/thumb2-purple-moon-valley-creative-nightscapes-purple-backgrounds.jpg",
    },
    {
      id: "3",
      title: "recuerdo3",
      image:
        "https://p4.wallpaperbetter.com/wallpaper/325/140/18/alone-stars-purple-background-hd-wallpaper-preview.jpg",
    },
    {
      id: "4",
      title: "recuerdo4",
      image:
        "https://imagenpng.com/wp-content/uploads/img/paisajes-mas-hermosos-del-mundo-para-fondo-de-pantalla.jpg",
    },
  ];
  return (
    <div>
      <Header />;
      <div className="App">
        <Carousel images={images} />;
      </div>
    </div>
  );
}

export default App;
