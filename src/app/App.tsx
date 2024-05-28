import { useTranslation } from 'react-i18next';
import './styles/App.scss';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      {t("test")}
    </div>
  );
}

export default App;
