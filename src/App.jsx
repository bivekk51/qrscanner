

import { useState } from 'react';
import QrScanner from 'react-qr-scanner';
function App() {

  const [scannedData, setScannedData] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  return (
    <>
      <div>
        <QrScanner
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>Scanned URL: {scannedData}</p>
      </div>
    </>
  )
}

export default App
