import { useState } from 'react';
import QrScanner from 'react-qr-scanner';

function App() {
  const [scannedData, setScannedData] = useState('');
  const [facingMode, setFacingMode] = useState('front'); // Default to back camera

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const toggleFacingMode = () => {
    setFacingMode((prevMode) => (prevMode === 'rear' ? 'front' : 'rear'));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">QR Code Scanner</h1>
          <div className="relative border-4 border-dashed border-gray-300 rounded-lg overflow-hidden aspect-square">
            <QrScanner
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '100%', height: '100%' }}
              facingMode="rear" // Set camera facing mode
            />
          </div>
          <p className="mt-4 text-center text-gray-700">Scanned URL: {scannedData}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={toggleFacingMode}
          >
            Switch Camera
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
