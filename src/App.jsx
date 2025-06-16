import { useState } from "react";
import Navbar from "./Component/Navbar";
import Stats from "./Component/Stats";
import SubmissionForm from "./Component/SubmissionForm";
import Transaction from "./Component/Transaction";

const App = () => {
  const defaultData = {
    id: crypto.randomUUID(),
    type: "expense",
    amount: 234,
    category: "Health",
    date: "2025-06-11",
  };

  const [data, setData] = useState([defaultData]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    type: "expense",
    category: "",
    amount: "",
    date: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      const updatedData = data.map((item) =>
        item.id === editingId
          ? { ...formData, id: editingId, amount: parseFloat(formData.amount) }
          : item
      );
      setData(updatedData);
    } else {
      const newData = {
        ...formData,
        id: crypto.randomUUID(),
        amount: parseFloat(formData.amount),
      };

      setData((prev) => [...prev, newData]);
    }

    // Reset form
    setFormData({
      type: "expense",
      category: "",
      amount: "",
      date: "",
    });
    setEditingId(null);
  };

  const handleDeleted = (id) => {
    setData(data.filter((e) => e.id !== id));
  };

  return (
    <>
      <Navbar />
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SubmissionForm
            formData={formData}
            setFormData={setFormData}
            onFormSubmit={handleFormSubmit}
          />
          <div className="lg:col-span-2">
            <Stats data={data} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <Transaction
                data={data}
                setFormData={setFormData}
                setEditingId={setEditingId}
                handleDeleted={handleDeleted}
                type={"expense"}
              />
              <Transaction
                data={data}
                setFormData={setFormData}
                setEditingId={setEditingId}
                handleDeleted={handleDeleted}
                type={"income"}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
