import "./App.css";
import Header from "./component/Header";
import Slider from "./component/Slider";

function App() {
  const images = [
    {
      id: "1",
      title: "Templo de santo Domingo",
      images:
        "https://noticias-do.laiglesiadejesucristo.org/media/640x480/santo-domingo-dominican-republic-808x480-CWD_100708_WTutt.jpg",
    },
    {
      id: "2",
      title: "A litle bird.",
      images:
        "https://cdn.pixabay.com/photo/2011/09/27/18/52/bird-9950_960_720.jpg",
    },
    {
      id: "3",
      title: "The best friend.",
      images:
        "https://cdn.pixabay.com/photo/2017/12/27/14/02/friends-3042751_960_720.jpg",
    },
    {
      id: "4",
      title: "Beautiful desert.",
      images:
        "https://cdn.pixabay.com/photo/2016/11/21/17/44/arches-national-park-1846759_960_720.jpg",
    },
    {
      id: "5",
      title: "Rango.",
      images:
        "https://c4.wallpaperflare.com/wallpaper/438/255/731/rango-wallpaper-preview.jpg",
    },
  ];

  return (
    <div className="app">
      <Header />;
      <div>
        <Slider images={images} />;
      </div>
    </div>
  );
}

export default App;
