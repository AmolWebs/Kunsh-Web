import React from 'react';

const HistoryPage = () => {
  return (
    <>
      <style>{`
        .development-container {
          height: 100vh;
          width: 100%;
          background: linear-gradient(135deg,rgb(234, 234, 234),rgb(255, 255, 255));
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: black;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-align: center;
          padding: 20px;
        }

        .dev-icon {
          font-size: 80px;
          margin-bottom: 20px;
          animation: bounce 1.5s infinite;
        }

        .dev-text {
          font-size: 32px;
          font-weight: bold;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      <div className="development-container">
        <div className="dev-icon">🚧</div>
        <div className="dev-text">This Page is Under Development</div>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          We're working hard to bring you this feature soon.
        </p>
      </div>
    </>
  );
};

export default HistoryPage;

