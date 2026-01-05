import { Button } from '@/components/ui/button';
import { OctagonXIcon, Undo2Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center gap-4">
      <OctagonXIcon className="h-35 w-35 text-red-800" />
      <h1 className="font-bold txt-red-800 text-2xl">404 Error.</h1>
      <h2>Halaman tidak ditemukan.</h2>
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

export default NotFound;
