import React from 'react';

const employees = [
  { id: 101, name: 'John Doe', department: 'Engineering', status: 'Present' },
  { id: 102, name: 'Jane Smith', department: 'HR', status: 'On Leave' },
  { id: 103, name: 'Mike Johnson', department: 'Finance', status: 'Present' },
];

const EmployeeTable = () => {
  return (
    <table style={{margin: '20px auto', borderCollapse: 'collapse', width: '80%'}} border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>{emp.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
