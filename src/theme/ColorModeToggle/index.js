import React, {useState, useEffect, useCallback} from 'react';
import {useColorMode} from '@docusaurus/theme-common';

export default function ColorModeToggle({className}) {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useColorMode();
  const [checked, setChecked] = useState(isDarkTheme);

  useEffect(() => {
    setChecked(isDarkTheme);
  }, [isDarkTheme]);

  const handleChange = useCallback(() => {
    const next = !checked;
    setChecked(next);
    if (next) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, [checked, setDarkTheme, setLightTheme]);

  return (
    <div className={`switch-toggle ${className ?? ''}`}>
      <label htmlFor="theme-toggle" className="switch-label">
        <span className="switch-wrap">
          <input
            id="theme-toggle"
            className="switch-input"
            type="checkbox"
            role="switch"
            checked={checked}
            onChange={handleChange}
          />
          <span className="switch-icon">
            <span className="switch-icon-part" />
            <span className="switch-icon-part" />
            <span className="switch-icon-part" />
            <span className="switch-icon-part" />
            <span className="switch-icon-part" />
            <span className="switch-icon-part" />
            <span className="switch-icon-part" />
            <span className="switch-icon-part" />
            <span className="switch-icon-part" />
          </span>
        </span>
      </label>
    </div>
  );
}
