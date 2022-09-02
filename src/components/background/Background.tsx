import React, { useEffect, useState } from 'react';
import { appStyles } from '../../app.styles';
import { getBackgroundColor } from '../../background';

const Background = () => {
  const [background, setBackground] = useState<string>();
  useEffect(() => {
    setBackground(getBackgroundColor());
  }, []);

  return <div className={appStyles.background(background)} />;
};

export default Background;
