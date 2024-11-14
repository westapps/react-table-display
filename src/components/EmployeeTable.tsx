import React, { useEffect, useState } from 'react';
import employeesData from '../assets/employees.json';
import { useEmployeeStore } from '../store/useEmployeeStore';

const EmployeeTable: React.FC = () => {
  const { employees, setEmployees } = useEmployeeStore();
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);

  useEffect(() => {
    setEmployees(employeesData);
  }, [setEmployees]);

  const sortedEmployees = React.useMemo(() => {
    let sortableEmployees = [...employees];
    if (sortConfig !== null) {
      sortableEmployees.sort((a, b) => {
        if (a[sortConfig.key as keyof typeof a] < b[sortConfig.key as keyof typeof b]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key as keyof typeof a] > b[sortConfig.key as keyof typeof b]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableEmployees;
  }, [employees, sortConfig]);

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table className="min-w-full bg-white">
      <thead className="bg-primary text-white">
        <tr>
          <th className="py-2">EmployeeID</th>
          {['Name', 'City', 'Gender', 'Birthdate'].map((header) => (
            <th
              key={header}
              className="py-2 cursor-pointer"
              onClick={() => requestSort(header)}
            >
              {header}
              <span className={getClassNamesFor(header)}></span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map((employee) => (
          <tr key={employee.EmployeeID} className="text-center">
            <td className="py-2">{employee.EmployeeID}</td>
            <td className="py-2">{employee.Name}</td>
            <td className="py-2">{employee.City}</td>
            <td className="py-2">{employee.Gender}</td>
            <td className="py-2">{employee.Birthdate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
