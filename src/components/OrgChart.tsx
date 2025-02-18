import React, { FC } from 'react';
import './OrganizationChart.css'; // Import the CSS

export interface IEmployee {
  id: string;
  parentId: string;
  EmployeeName?: string;
  Department?: string;
  JobTitle?: string;
  SupervisorEmail?: string;
  SupervisorName?: string;
  EmpO365Email?: string;
  SupervisorO365Email?: string;
  FirstName?: string;
  LastName?: string;
  Tier?: number;
  children?: IEmployee[];
}

interface IOrganizationChartProps {
  data: IEmployee;
}

const renderNode = (employee: IEmployee, tier: number = 0) => {

    const processTier = (child: IEmployee, tier: number) => {
        const extraTiers = (child.Tier || 0) - tier 
        const line = <div className="line" style={{height: `${20 + (100 * extraTiers)}px`}}></div>
        const emptyNodes = [line]
        for (let i = 0; i < extraTiers; i++) {
            emptyNodes.push(<div className="emptyNode" key={i}></div>)
        }
        console.log({ child, emptyNodes })
        return emptyNodes
    }

  return (
    <div className="node" key={employee.id}>
      <div className="info">
        <div className="personName">{`${employee.FirstName} ${employee.LastName}`}</div>
        <div className="personTitle">{employee.JobTitle}</div>
        <div className="personDepartment">{employee.Department}</div>
      </div>
      {employee.children && employee.children.length > 0 && (
        <div className="children">
          {employee.children.map(child => (
            <div className="child" key={child.id}>
              {processTier(child, tier)}
              {renderNode(child, tier + 1)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const SimpleOrgChart: FC<IOrganizationChartProps> = ({ data }) => {
  return (
    <div className="orgChart">
      {renderNode(data, 2)}
    </div>
  );
};

export default SimpleOrgChart;