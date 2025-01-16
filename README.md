# Node.js Ungraceful Shutdown Bug

This repository demonstrates a common yet subtle bug in Node.js HTTP servers: ungraceful shutdown.  The provided code creates a simple HTTP server, but it lacks proper handling for the 'close' event, leading to potential issues.

## Bug Description

The `server.close()` method is asynchronous.  If the server receives requests while closing, it might not shut down cleanly, leading to resource leaks (e.g., open file descriptors) and potentially affecting subsequent server starts.

## Reproduction

1. Clone this repository.
2. Run `node bug.js`.
3. Send requests to `http://localhost:8080`.
4. Attempt to shut down the server (e.g., using Ctrl+C). Observe that the server might not shut down immediately.

## Solution

The `bugSolution.js` file provides a corrected version that uses the `'close'` event listener to ensure the server closes gracefully after all connections have been handled.