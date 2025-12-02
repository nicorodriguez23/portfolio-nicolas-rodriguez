export default function CodeRain() {
  const columns = Array.from({ length: 16 }); 

  const snippets = [
    `const sum = (a, b) => a + b;`,
    `const delay = (ms) => new Promise(r => setTimeout(r, ms));`,
    `async function fetchUser(id) {
  const res = await fetch(\`/api/users/\${id}\`);
  if (!res.ok) throw new Error('REQUEST_FAILED');
  return res.json();
}`,
    `type User = {
  id: string;
  email: string;
  active: boolean;
};`,
    `const config = {
  env: import.meta.env.MODE ?? 'production',
  apiUrl: '/api/v1',
  retries: 3,
};`,
    `const range = (start, end) =>
  Array.from({ length: end - start }, (_, i) => start + i);`,
    `const logger = (label) => (value) =>
  console.log(\`[\${label}]\`, value);`,
    `function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => listeners.splice(listeners.indexOf(listener), 1);
  };
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(l => l());
  };
  return { getState, subscribe, dispatch };
}`,
    `// NOTE: keep components small and focused`,
    `// TIP: commit early, commit often`,
  ];

  const text = `${snippets.join("\n\n")}\n\n${snippets.join(
    "\n\n"
  )}\n\n${snippets.join("\n\n")}`;

  return (
    <div className="code-rain">
      <div className="code-rain__columns">
        {columns.map((_, index) => (
          <div
            key={index}
            className="code-rain__column"
            style={{ animationDelay: `${index * -1.2}s` }}
          >
            <pre className="code-rain__text">{text}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
