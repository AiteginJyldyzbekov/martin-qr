import { useTranslation } from 'react-i18next';
import './styles/App.scss';
import AppRouter from './providers/router/ui/AppRouter';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
