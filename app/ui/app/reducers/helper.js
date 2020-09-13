export function start (request) {
  request.pending = true;
  request.error = null;
}

export function error (request, action) {
  request.pending = false;
  request.error = action.payload;
}