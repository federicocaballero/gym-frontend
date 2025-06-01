// src/pages/Dashboard.jsx
import React, { useState } from 'react';
// import Header from '../components/Header';
// import SearchMember from '../components/SearchMember';
// import CardContainer from '../components/CardContainer';
// import CreateMemberForm from '../components/CreateMemberForm';
// import UpdatePaymentForm from '../components/UpdatePaymentForm';
// import RegisterAttendanceForm from '../components/RegisterAttendanceForm';
// import ClientList from '../components/ClientList';

export default function Dashboard() {
  const [memberData, setMemberData] = useState(null); // objeto o array de matches
  const [openPanel, setOpenPanel] = useState(''); // 'create','update','attendance','list'

  // Cuando SearchMember devuelve un cliente u array:
//   const handleSearchSelect = (data) => {
//     setMemberData(data);
//     // Abre el panel de asistencia por defecto
//     setOpenPanel('attendance');
//   };

  return (
    <div>
        <h1>Dashboard</h1>
      {/* <Header />

      {/* Siempre visible */}
      {/* <SearchMember onSelect={handleSearchSelect} /> */}

      {/* Create Member */}
      {/* <CardContainer
        title="Create Member"
        isOpen={openPanel === 'create'}
        onToggle={() => setOpenPanel(openPanel === 'create' ? '' : 'create')}
      >
        <CreateMemberForm adminId="ADMIN_ID_UUID_HERE" />
      </CardContainer> */}

      {/* Update Payment */}
      {/* <CardContainer
        title="Update Payment"
        isOpen={openPanel === 'update'}
        onToggle={() => setOpenPanel(openPanel === 'update' ? '' : 'update')}
      >
        <UpdatePaymentForm adminId="ADMIN_ID_UUID_HERE" />
      </CardContainer> */}

      {/* Register Attendance */}
      {/* <CardContainer
        title="Register Attendance"
        isOpen={openPanel === 'attendance'}
        onToggle={() => setOpenPanel(openPanel === 'attendance' ? '' : 'attendance')}
      >
        <RegisterAttendanceForm adminId="ADMIN_ID_UUID_HERE" />
      </CardContainer> */}

      {/* Client List */}
      {/* <CardContainer
        title="Client List"
        isOpen={openPanel === 'list'}
        onToggle={() => setOpenPanel(openPanel === 'list' ? '' : 'list')}
      >
        <ClientList />
      </CardContainer>  */}
    </div>
  );
}
