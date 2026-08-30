import { useEffect } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { updatePageSEO } from '../utils/seo';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    updatePageSEO('Page Not Found', 'The page you requested could not be located.');
  }, []);

  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 20px 80px',
        textAlign: 'center'
      }}
    >
      <div className="container" style={{ maxWidth: '600px' }}>
        <div className="eyebrow-label" style={{ marginBottom: '16px' }}>404 Error</div>
        <h1 style={{ fontSize: '3.5rem', color: 'var(--navy-deep)', marginBottom: '16px' }}>
          Page Not Found
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '32px' }}>
          The page you are looking for may have been moved or does not exist. Let us guide you back to our clinic home.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <Button to="/" variant="primary" icon={<Home size={16} />}>
            Return to Homepage
          </Button>
          <Button to="/services" variant="secondary" icon={<ArrowLeft size={16} />}>
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
};
