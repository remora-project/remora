export default `
  type Transaction {
    timestamp: Float!
    elapsedTime: Int!
  }

  type Query {
    transactions: [Transaction]
  }
`;
