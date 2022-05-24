const API_URL = "/.netlify/functions/mapping";
const CACHE_KEY = "utm-demo-mapping";

// Returns a cached response and a promise to get fresh data
export const fetchData = () => {
  const cached = getCachedResponse();
  const request = async () => {
    const resonse = await fetch(API_URL);
    const data = await resonse.json();
    // TODO Prevent cache update if data not updated and do invalidation
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    return data;
  };
  return {
    cached,
    request,
  };
};

const getCachedResponse = () => {
  const data = localStorage.getItem(CACHE_KEY);
  return data ? JSON.parse(data) : null;
};
