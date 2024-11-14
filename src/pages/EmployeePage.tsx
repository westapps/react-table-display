import React from 'react';
import EmployeeTable from '../components/EmployeeTable';

const EmployeePage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Employee Data</h1>
      <EmployeeTable />
    </div>
  );
};

export default EmployeePage;
