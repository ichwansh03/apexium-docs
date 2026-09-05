import React from 'react';
import styles from './styles.module.css';

const TerminalLines = [
  { prompt: '$', text: ' ./apexium start', type: 'command' },
  { text: '✓ Apexium run successful', type: 'success' },
  { prompt: '', text: '', type: 'empty' },
  { prompt: '$', text: ' ./apexium init', type: 'command' },
  { text: '✓ write sf config to .env_dev', type: 'comment' },
  { prompt: '', text: '', type: 'empty' },
  { prompt: '$', text: ' ./apexium log', type: 'command' },
  { text: '✓ 142 logs retrieved · 2.3 MB', type: 'success' },
  { prompt: '', text: '', type: 'empty' },
  { prompt: '$', text: ' ./apexium status', type: 'command' },
  { text: '⬆️ status: UP', type: 'success' },
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
