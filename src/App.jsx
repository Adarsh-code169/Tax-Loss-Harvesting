import Navbar from './components/Navbar';
import ImportantNotes from './components/ImportantNotes';
import PreHarvestingCard from './components/PreHarvestingCard';
import AfterHarvestingCard from './components/AfterHarvestingCard';
import HoldingsTable from './components/HoldingsTable';

function App() {
  // Main dashboard layout
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-12">
        <div className="flex items-center gap-4 mb-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tax Optimisation</h1>
          <a href="#" className="text-[#2563EB] text-sm font-semibold hover:underline">
            How it works?
          </a>
        </div>

        <ImportantNotes />

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/5">
            <PreHarvestingCard />
          </div>
          <div className="lg:w-3/5">
            <AfterHarvestingCard />
          </div>
        </div>

        <HoldingsTable />
      </main>
    </div>
  );
}

export default App;
