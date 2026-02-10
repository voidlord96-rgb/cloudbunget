import "./App.css";
import Navigation from "./components/navigation/navigation";
import Header from "./components/header/header";
import Program from "./components/program/program";
import Feature from "./components/features/features";
import Technology from "./components/technology/technology";
import SavingMoney from "./components/saving-money/saving-money";
import Contact from "./components/contact/contact";
import Footert from "./components/footer/footer";



/*
создать папку css:
  - создать файл для базовых стилей
  - создать файл для компиляции

создать папку для компонентов:
  - создать 8 папок для компонентов
  - в каждой папке добавить 1 jsx и 1 css файлы
  
  
создать пустую обертку для компонентов
добавить 8 компонентов
*/
function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Program />
      <Feature />
      <Technology />
      <SavingMoney />
      <Contact />
      <Footert />
    </>
  );
}

export default App;
