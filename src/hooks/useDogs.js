import { useState, useEffect, useMemo } from "react";
import { getSizeByBreed } from "../utils";

const API_URL = "https://api.jsonbin.io/v3/b/68ccf99ad0ea881f4082d5b8";

export function useDogs({ search, breed, size, age, sex }) {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hämta hundar från API
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        const dogsList = data.record || [];
        const withKeys = dogsList.map((d, i) => ({
          id: d.chipNumber ?? String(i + 1),
          size: getSizeByBreed(d.breed), // lägg till storlek
          ...d,
        }));
        setDogs(withKeys);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Filtrering
  const filteredDogs = useMemo(() => {
    return dogs.filter((d) => {
      const matchesSearch = d.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesBreed = breed ? d.breed === breed : true;
      const matchesSize = size ? d.size === size : true;
      const matchesAge = age ? String(d.age) === age : true;
      const matchesSex = sex ? d.sex === sex : true;

      return (
        matchesSearch && matchesBreed && matchesSize && matchesAge && matchesSex
      );
    });
  }, [dogs, search, breed, size, age, sex]);

  // unika värden för filtrering
  const breeds = [...new Set(dogs.map((d) => d.breed).filter(Boolean))].sort();
  const sizes = [...new Set(dogs.map((d) => d.size).filter(Boolean))].sort();
  const ages = [...new Set(dogs.map((d) => d.age).filter(Boolean))].sort((a, b) => a - b);


  return { dogs, filteredDogs, breeds, sizes, ages, loading, error };
}
