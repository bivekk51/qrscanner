import { useState } from 'react';
import { QrReader } from 'react-qr-reader'; // Import from react-qr-reader

function App() {
  const [scannedData, setScannedData] = useState('');
  const [facingMode, setFacingMode] = useState('environment'); // Default to back camera

  const handleScan = (result, error) => {
    if (result) {
      setScannedData(result?.text || result); // Extract text from result
    }
    if (error) {
      console.error(error);
    }
  };

  // Toggle between front and back camera
  const toggleFacingMode = () => {
    setFacingMode((prevMode) => (prevMode === 'environment' ? 'user' : 'environment'));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">QR Code Scanner</h1>
        <div className="relative border-4 border-dashed border-gray-300 rounded-lg overflow-hidden aspect-square">
          <QrReader
            delay={300}
            onResult={handleScan} // This method handles scanning and errors
            constraints={{ facingMode }} // Camera facingMode (front or back)
            style={{ width: '100%' }}
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
  );
}

export default App;
