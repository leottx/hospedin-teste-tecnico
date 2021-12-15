const mainGrid = () => `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 15px;
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
`

export { mainGrid };