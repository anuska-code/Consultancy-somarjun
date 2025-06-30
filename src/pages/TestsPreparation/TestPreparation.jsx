import React from 'react';
import { Outlet } from 'react-router-dom';

const TestPreparation = () => {
  return (
    <div>

      <Outlet /> {/* This renders IELTS, PTE, or SAT based on the URL */}
    </div>
  );
};

export default TestPreparation;
