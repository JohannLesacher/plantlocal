export const dynamic = 'force-dynamic'
import Button from './components/Geolocalization/button';

export default async function HomePage() {
  return (
    <main className="">
      <div className="p-10">
        <Button text="Autour de moi"/>
      </div>
    </main>
  );
}