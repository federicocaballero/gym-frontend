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
    <div style={{ padding: "2rem" }}>
      <CollapsibleSection
        title="Buscar Alumno"
        icon={<SearchIcon />}
        defaultExpanded={true}
      >
        <SearchMember />
      </CollapsibleSection>

      <CollapsibleSection
        title="Create Member"
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