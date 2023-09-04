import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ScreenreaderLabelExample() {
  const now = 97;
  return <ProgressBar now={now} label={`${now}%`} visuallyHidden />;
}

export default ScreenreaderLabelExample;