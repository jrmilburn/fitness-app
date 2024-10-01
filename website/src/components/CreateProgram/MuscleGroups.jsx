export default function MuscleGroups({ visible, onClose }) {

    if (!visible) return null;
  
    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };
  
    return (
      <>
        {visible && (
          <div 
            className="fixed inset-0 flex items-center justify-center z-50" 
            onClick={handleOverlayClick}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
            {/* Modal Content */}
            <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md relative z-10">
              <h2 className="text-xl mb-4">Muscle Groups</h2>
              <p>This is where all the muscle groups will go</p>
  
              <button onClick={onClose} className="mt-4 p-2 bg-blue-500 text-white rounded">
                Close
              </button>
            </div>
          </div>
        )}
      </>
    );
  }