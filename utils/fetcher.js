
const fetcher = (...params) => fetch(...params).then(res => res.json());

export default fetcher;
