import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to fetch technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        toast.error("Failed to load technologies!");
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );
      return;
    }

    setStack((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  const removeFromStack = (id: number) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack!`
      );
    }
  };

  const removeAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setStack([]);

    toast.info("All technologies removed!");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {loading ? (
          <section className="loading-section">
            <div className="spinner"></div>
            <p>Loading technologies...</p>
          </section>
        ) : (
          <div className="content-layout">
            <Technologies
              technologies={technologies}
              stack={stack}
              onAdd={addToStack}
            />

            <YourStack
              stack={stack}
              onRemove={removeFromStack}
              onRemoveAll={removeAll}
            />
          </div>
        )}
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;