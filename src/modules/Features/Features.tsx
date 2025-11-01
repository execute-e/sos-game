import { useTranslation } from 'react-i18next';
import bg from './images/bg.jpg';

const Features = () => {
    const { t } = useTranslation();
  return (
    <section
      id="game-features"
      className="min-h-screen bg-no-repeat bg-cover bg-center text-white"
      style={{
        backgroundImage: `radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%),url(${bg})`,
      }}>
        <div>
            <div>
                <h3>{t('features.subtitle')}</h3>
                <h2>{t('features.title')}</h2>
            </div>
            <div>
                
            </div>
        </div>
      </section>
  );
};

export default Features;
