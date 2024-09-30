import { useState } from 'react';
import QrScanner from 'react-qr-scanner';

function App() {
  const [scannedData, setScannedData] = useState('');
  const [isFrontCamera, setIsFrontCamera] = useState(true);

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const toggleCamera = () => {
    setIsFrontCamera((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <QrScanner
          delay={300}
          onError={handleError}
          onScan={handleScan}
          facingMode={isFrontCamera ? 'user' : 'environment'} // Switch camera mode
          style={{ width: '100%', maxWidth: '400px', border: '2px solid #000' }} // Add some styling
        />
        <p className="mt-4 text-lg font-semibold">Scanned URL: {scannedData}</p>
        <button
          onClick={toggleCamera}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Switch Camera
        </button>
      </div>
    </>
  );
}

export default App;
