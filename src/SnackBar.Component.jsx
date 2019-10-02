import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SnackBar.scss';

const snackBar = ({ isShowing, text, displayTime, customClass, showCloseBtn }) => {
  customClass = typeof customClass !== 'undefined' ? ' '+customClass : '';
  const closeBtn = () => setShowSnackBar(false);
  const [showSnackBar, setShowSnackBar] = useState(false);

  useEffect(() => setShowSnackBar(isShowing), [isShowing, text, displayTime, customClass, showCloseBtn]);
  if (showSnackBar && typeof displayTime !== 'undefined') {
    setTimeout(() => setShowSnackBar(false), displayTime);
  }

  return (
    <div>
      <div className={`snackbarContainer${customClass}${showSnackBar ? ' snackbarShow' : ''}`}>
        {showCloseBtn && (<><span className="closeBtn" onClick={closeBtn}>×</span><br /></>)}
        {text}
      </div>
    </div>
  );
};

snackBar.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  displayTime: PropTypes.number,
  customClass: PropTypes.string,
  showCloseBtn: PropTypes.bool,
};

export default snackBar;