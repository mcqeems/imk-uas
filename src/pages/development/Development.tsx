import { Button } from '@/components/ui/button';
import { CogIcon, Undo2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Development() {
  const navigate = useNavigate();
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center gap-4">
      <CogIcon className="h-35 w-35 text-primary" />
      <h1>Halaman sedang dalam pengembangan...</h1>
      <Button
        onClick={() => {
          navigate('/');
        }}
        size="lg"
        className="p-4 cursor-pointer"
      >
        Klik untuk kembali <Undo2Icon className="w-5 h-5" />
      </Button>
    </div>
  );
}

export default Development;
