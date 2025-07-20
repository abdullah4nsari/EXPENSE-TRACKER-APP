import React from "react";

const Modal = ({ children, isOpen, onClose, title }) => {
    if(!isOpen) return null;
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full max-h-full overflow-x-hidden bg-black/30 bg-opacity-50">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/*Modal content*/}
        <div className="relative bg-white rounded-lg shadow-sm ">
          {/*Modal Header */}
          {/* <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200"> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 ">
              {title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center  cursor-pointer"
              onClick={onClose}
            >
              <svg
                className="w-5 h-5 text-gray-500 hover:text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/*Model Body*/}
          <div className="p-4 md:p-5 space-y-4 dark:text-white">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
