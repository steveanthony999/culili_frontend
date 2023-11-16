import { UserButton } from '@clerk/clerk-react';

const DashboardHeader = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <h3>Culili</h3>
      <div>Menu</div>
      <div>
        <UserButton showName afterSignOutUrl={'/'} />
      </div>
    </div>
  );
};

export default DashboardHeader;
