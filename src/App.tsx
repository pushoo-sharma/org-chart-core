import React from 'react';
import OrgChart from './components/OrgChart';
const sampleData: any = {
  id: "1",
  parentId: "",
  EmployeeName: "John Doe",
  Department: "Engineering",
  JobTitle: "CEO",
  SupervisorEmail: "",
  SupervisorName: "",
  EmpO365Email: "john.doe@company.com",
  SupervisorO365Email: "",
  FirstName: "John",
  LastName: "Doe",
  Tier: 1,
  children: [
    {
      id: "2",
      parentId: "1",
      EmployeeName: "Jane Smith",
      Department: "Engineering",
      JobTitle: "CTO",
      SupervisorEmail: "john.doe@company.com",
      SupervisorName: "John Doe",
      EmpO365Email: "jane.smith@company.com",
      SupervisorO365Email: "john.doe@company.com",
      FirstName: "Jane",
      LastName: "Smith",
      Tier: 2,
      children: [
        {
          id: "3",
          parentId: "2",
          EmployeeName: "Alice Johnson",
          Department: "Engineering",
          JobTitle: "Senior Engineer",
          SupervisorEmail: "jane.smith@company.com",
          SupervisorName: "Jane Smith",
          EmpO365Email: "alice.johnson@company.com",
          SupervisorO365Email: "jane.smith@company.com",
          FirstName: "Alice",
          LastName: "Johnson",
          Tier: 3,
          children: [
            {
              id: "10",
              parentId: "3",
              EmployeeName: "Nick Johnson",
              Department: "Engineering",
              JobTitle: "Senior Engineer",
              SupervisorEmail: "jane.smith@company.com",
              SupervisorName: "Jane Smith",
              EmpO365Email: "alice.johnson@company.com",
              SupervisorO365Email: "jane.smith@company.com",
              FirstName: "Nick",
              LastName: "Johnson",
              children: []
            }
          ]
        },
        {
          id: "4",
          parentId: "2",
          EmployeeName: "Bob Brown",
          Department: "Engineering",
          JobTitle: "Senior Engineer",
          SupervisorEmail: "jane.smith@company.com",
          SupervisorName: "Jane Smith",
          EmpO365Email: "bob.brown@company.com",
          SupervisorO365Email: "jane.smith@company.com",
          FirstName: "Bob",
          LastName: "Brown",
          Tier: 4,
          children: []
        }
      ]
    },
    {
      id: "5",
      parentId: "1",
      EmployeeName: "Charlie Davis",
      Department: "Sales",
      JobTitle: "CFO",
      SupervisorEmail: "john.doe@company.com",
      SupervisorName: "John Doe",
      EmpO365Email: "charlie.davis@company.com",
      SupervisorO365Email: "john.doe@company.com",
      FirstName: "Charlie",
      LastName: "Davis",
      Tier: 2,
      children: []
    },
    {
      id: "6",
      parentId: "1",
      EmployeeName: "tier 3",
      Department: "tier 3",
      JobTitle: "tier 3",
      SupervisorEmail: "john.doe@company.com",
      SupervisorName: "John Doe",
      EmpO365Email: "charlie.davis@company.com",
      SupervisorO365Email: "john.doe@company.com",
      FirstName: "tier",
      LastName: "3",
      Tier: 3,
      children: []
    }
  ]
};
function App() {
  return <OrgChart data={sampleData} />;
}

export default App;