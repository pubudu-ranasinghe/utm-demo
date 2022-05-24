exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        selector: "#hero-callout",
        content: "tech startup",
      },
      {
        selector: "#hero-btn",
        content: "Start now",
      },
    ]),
  };
};
