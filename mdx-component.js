export function useMDXComponents(components) {
    return {
      h1: (props) => (
        <h1 className="text-4xl font-bold mt-10 mb-4" {...props} />
      ),
      h2: (props) => (
        <h2 className="text-2xl font-semibold mt-8 mb-3" {...props} />
      ),
      p: (props) => (
        <p className="text-gray-300 leading-7 mt-4" {...props} />
      ),
      code: (props) => (
        <code className="bg-gray-800 px-1 py-0.5 rounded" {...props} />
      ),
      pre: (props) => (
        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mt-4" {...props} />
      ),
      ...components,
    };
  }