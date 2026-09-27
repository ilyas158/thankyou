'use client';

import { useState, useEffect } from 'react';

export default function ThankYouPage() {
  const [loadingStep, setLoadingStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setLoadingStep(1), 700);
    const timer2 = setTimeout(() => setLoadingStep(2), 1500);
    const timer3 = setTimeout(() => {
      setIsCompleted(true);
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.card}>
        {!isCompleted ? (
          <div style={styles.processingContainer}>
            <div style={styles.spinner}></div>
            <h2 style={styles.processingTitle}>Securing Your Order...</h2>
            <div style={styles.stepsList}>
              <p style={{ ...styles.stepItem, opacity: loadingStep >= 0 ? 1 : 0.4 }}>
                {loadingStep > 0 ? '✓' : '⏳'} Confirming payment transaction...
              </p>
              <p style={{ ...styles.stepItem, opacity: loadingStep >= 1 ? 1 : 0.4 }}>
                {loadingStep > 1 ? '✓' : loadingStep === 1 ? '⏳' : '○'} Generating secure receipt...
              </p>
              <p style={{ ...styles.stepItem, opacity: loadingStep >= 2 ? 1 : 0.4 }}>
                {loadingStep >= 2 ? '✓' : '○'} Dispatching to your email...
              </p>
            </div>
          </div>
        ) : (
          <div style={styles.fadeIn}>
            <div style={styles.iconContainer}>
              <svg style={styles.svg} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>

            <h1 style={styles.title}>Payment Successful!</h1>
            <p style={styles.subtitle}>Your order has been safely processed and is on its way.</p>

            <div style={styles.infoBox}>
              <div style={styles.infoRow}>
                <span style={styles.label}>Delivery Time:</span>
                <span style={styles.value}>Instant (Within 0 - 30 Mins)</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.label}>Status:</span>
                <span style={{ ...styles.value, color: '#16a34a' }}>Email Sent Successfully</span>
              </div>
            </div>

            {/* صندوق الإرشادات البصرية المتحركة لأماكن البريد */}
            <div style={styles.warningBox}>
              <p style={styles.warningTitleText}>🔍 Where to find your email in Gmail:</p>
              <p style={styles.warningSubText}>If you don't see it right away, please check these sections:</p>
              
              <div style={styles.foldersGrid}>
                <div style={styles.folderCard}>
                  <span style={styles.folderIcon}>📥</span>
                  <span style={styles.folderName}>Inbox</span>
                </div>
                <div style={styles.folderCard}>
                  <span style={styles.folderIcon}>🛈</span>
                  <span style={styles.folderName}>Update</span>
                </div>
                <div style={styles.folderCard}>
                  <span style={styles.folderIcon}>⚠️</span>
                  <span style={styles.folderName}>Spam / Junk</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: '#f8fafc',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    margin: 0,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
    maxWidth: '550px',
    width: '100%',
    padding: '40px 30px',
    textAlign: 'center' as const,
    border: '1px solid #e2e8f0',
  },
  processingContainer: {
    padding: '20px 0',
  },
  spinner: {
    width: '48px',
    height: '48px',
    border: '4px solid #e2e8f0',
    borderTop: '4px solid #2563eb',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto 20px auto',
  },
  processingTitle: {
    fontSize: '20px',
    fontWeight: '600' as const,
    color: '#0f172a',
    marginBottom: '20px',
  },
  stepsList: {
    textAlign: 'left' as const,
    maxWidth: '320px',
    margin: '0 auto',
    fontSize: '14px',
    color: '#475569',
  },
  stepItem: {
    marginBottom: '10px',
    transition: 'opacity 0.3s ease',
  },
  fadeIn: {
    animation: 'fadeIn 0.5s ease-in-out',
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    backgroundColor: '#dcfce7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px auto',
  },
  svg: {
    width: '32px',
    height: '32px',
    color: '#16a34a',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700' as const,
    color: '#0f172a',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '15px',
    color: '#64748b',
    marginBottom: '25px',
  },
  infoBox: {
    backgroundColor: '#f1f5f9',
    borderRadius: '10px',
    padding: '16px 20px',
    marginBottom: '20px',
    textAlign: 'left' as const,
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontSize: '14px',
  },
  label: {
    color: '#475569',
    fontWeight: '500' as const,
  },
  value: {
    color: '#0f172a',
    fontWeight: '600' as const,
  },
  warningBox: {
    backgroundColor: '#fffbeb',
    border: '1px solid #fef3c7',
    borderRadius: '10px',
    padding: '16px 18px',
    marginBottom: '10px',
    textAlign: 'left' as const,
  },
  warningTitleText: {
    fontSize: '14px',
    fontWeight: '700' as const,
    color: '#92400e',
    marginBottom: '4px',
    marginTop: 0,
  },
  warningSubText: {
    fontSize: '12px',
    color: '#b45309',
    marginBottom: '12px',
    marginTop: 0,
  },
  foldersGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  folderCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    border: '1px solid #fde68a',
    borderRadius: '8px',
    padding: '10px 6px',
    textAlign: 'center' as const,
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
  },
  folderIcon: {
    fontSize: '18px',
    display: 'block',
    marginBottom: '4px',
  },
  folderName: {
    fontSize: '11px',
    fontWeight: '600' as const,
    color: '#78350f',
  },
};