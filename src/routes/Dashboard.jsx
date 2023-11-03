import { UserButton } from '@clerk/clerk-react';

const Dashboard = () => {
  return (
    <div>
      <h1>Hello Dashboard</h1>
      <UserButton afterSignOutUrl={'/'} />
    </div>
  );
};

export default Dashboard;
