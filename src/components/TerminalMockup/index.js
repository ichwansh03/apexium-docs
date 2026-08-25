import React from 'react';
import styles from './styles.module.css';

const TerminalLines = [
  { prompt: '$', text: ' apexium-log auth login --org my-org', type: 'command' },
  { text: '✓ Authenticated as dev@example.com', type: 'comment' },
  { prompt: '', text: '', type: 'empty' },
  { prompt: '$', text: ' apexium-log trace enable --user joe --duration 60', type: 'command' },
  { text: '✓ Trace flag scheduled (ID: tf-4a3b)', type: 'success' },
  { prompt: '', text: '', type: 'empty' },
  { prompt: '$', text: ' apexium-log logs fetch --since today', type: 'command' },
  { text: '✓ 142 logs retrieved · 2.3 MB', type: 'comment' },
  { prompt: '', text: '', type: 'empty' },
  { prompt: '$', text: ' apexium-log coverage report', type: 'command' },
  { text: '📊 Overall coverage: 87% · 12 classes at 100%', type: 'comment' },
];

export default function TerminalMockup() {
  return (
    <div className={styles.terminalBox}>
      <div className={styles.terminalDots}>
        <span className={styles.dot} style={{background: '#ff5f56'}} />
        <span className={styles.dot} style={{background: '#ffbd2e'}} />
        <span className={styles.dot} style={{background: '#27c93f'}} />
      </div>
      <pre className={styles.terminalPre}>
        <code>
          {TerminalLines.map((line, i) => {
            if (line.type === 'empty') return <br key={i} />;
            return (
              <div key={i}>
                {line.prompt && (
                  <span className={styles.prompt}>{line.prompt}</span>
                )}
                <span className={styles[line.type]}>{line.text}</span>
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
}
