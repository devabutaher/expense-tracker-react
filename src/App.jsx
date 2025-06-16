import Expense from "./Component/Expense";
import Income from "./Component/Income";
import Navbar from "./Component/Navbar";
import Stats from "./Component/Stats";
import SubmissionForm from "./Component/SubmissionForm";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SubmissionForm />
          <div className="lg:col-span-2">
            <Stats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <Expense />
              <Income />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
