import './App.css'
import { SearchMember } from "./features/member-search/SearchMember";
import { CollapsibleSection } from "./components/shared/Colapsible";
import SearchIcon from '@mui/icons-material/Search';
import { CreateMemberForm } from './features/create-member/CreateMember';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { UpdatePaymentForm } from './features/payment-update/PaymentUpdateCard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

function App() {
  return (
    <div style={{ padding: "0 2rem 2rem 2rem" }}>
      <h1>Panel de Administración</h1>
      <h3>Administre los socios, pagos y asistencias</h3>
      <SearchMember />

      <CollapsibleSection
        title="Registrar socio"
        icon={<AddCircleIcon />}
        defaultExpanded={true}
      >
        <CreateMemberForm onSubmit={() => {
          console.log('submit');
        }} />
      </CollapsibleSection>

      <CollapsibleSection
        title="Update Payment"
        icon={<CurrencyExchangeIcon />}
        defaultExpanded={true}
      >
        <UpdatePaymentForm />
      </CollapsibleSection>
    </div>
  );
}

export default App
