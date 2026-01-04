import mitraData from '../data/mitra.json';

interface MitraTypes {
  name: string;
  description: string;
  type: string;
  image: string;
}

function Mitra() {
  const mitras: MitraTypes[] = mitraData;
  return (
    <section className="flex flex-col justify-center items-center w-full px-2 py-4">
      <div className="max-w-full w-full">
        <h2 className="text-2xl font-bold text-center">Mitra Inspirasi</h2>
      </div>
      <div className="grid grid-cols-3 w-full max-w-6xl gap-8 mt-4">
        {mitras.slice(0, 9).map((mitra) => {
          return (
            <div className="flex flex-col items-center min-h-50 justify-between border border-border rounded-lg p-8">
              <img height={300} width={300} className="object-contain" src={`/mitra/${mitra.image}`} />
              <p className="text-center text-sm">{mitra.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Mitra;
