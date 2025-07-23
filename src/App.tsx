import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://blogdebrinquedo.com.br/wp-content/uploads/2024/02/20240207carro-batmobile-rosa-pink-batman-classic-tv-series-pink-slips-vehicle-011.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
