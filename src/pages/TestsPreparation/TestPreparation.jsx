import React from 'react';
import { Outlet } from 'react-router-dom';

const TestPreparation = () => {
  return (
    <div>
      <h1>Test Preparation Main Page</h1>
      <Outlet /> {/* This renders IELTS, PTE, or SAT based on the URL */}
    </div>
  );
};

export default TestPreparation;
