import AppLayout from './Ui/AppLayout';
import Button from './Ui/Button';

function App() {
  const handleClick = () => alert('Button clicked!');
  return (
    <div className="h-screen max-w-[1440px] bg-rose-50">
      <AppLayout />
    </div>
  );
}

export default App;
