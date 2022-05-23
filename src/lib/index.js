import mutate from "dom-mutator";

const CAMPAIGN_SELECTOR = "utm_campaign";
const CAMPAIGN_VALUE = "generic";

const mutations = [
  {
    selector: "#hero-callout",
    content: "tech startup",
  },
  {
    selector: "#hero-btn",
    content: "Start now",
  },
];

const init = () => {
  if (!shouldLoadMutations()) {
    return;
  }
  mutations.forEach(applyMutation);
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
