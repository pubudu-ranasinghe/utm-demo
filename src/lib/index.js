import mutate from "dom-mutator";
import { fetchData } from "./api";

const CAMPAIGN_SELECTOR = "utm_campaign";
const CAMPAIGN_VALUE = "generic";

const init = () => {
  if (!shouldLoadMutations()) {
    return;
  }
  const { cached, request } = fetchData();
  if (cached) {
    cached.forEach(applyMutation);
  }
  request().then((response) => {
    // TODO Prevent update if data matches cache
    response.forEach(applyMutation);
  });
};

const shouldLoadMutations = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const campaign = urlParams.get(CAMPAIGN_SELECTOR);
  return campaign === CAMPAIGN_VALUE;
};

const applyMutation = (mutation) => {
  mutate.html(mutation.selector, () => mutation.content);
};

init();
