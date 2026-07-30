const logAnalytics = (action) => {
  const timestamp = new Date().toISOString();

  console.log(
    `[Analytics] ${action} | Time: ${timestamp}`
  );
};

export default logAnalytics;