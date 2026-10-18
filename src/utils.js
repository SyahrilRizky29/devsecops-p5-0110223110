// Helper utilities
function formatResponse(status, data, message = "") {
  return {
    status: status,
    message: message,
    data: data,
    timestamp: new Date().toISOString()
  };
}

module.exports = { formatResponse };