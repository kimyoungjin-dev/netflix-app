import React, { useState, useEffect } from "react";
import { movieApi } from "../../api/api";
import DiscoveryPresenter from "./DiscoveryPresenter";

const DiscoveryContainer = () => {
  const [results, setResults] = useState({
    discovery: [],
    discoveryError: null,
  });

  const getData = async () => {
    const [discovery, discoveryError] = await movieApi.discover();
    setResults({ discovery, discoveryError });
  };

  useEffect(() => {
    getData();
  }, []);

  return <DiscoveryPresenter {...results} />;
};

export default DiscoveryContainer;
