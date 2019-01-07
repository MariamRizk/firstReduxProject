export const onLoad = ()  => ({
  type: 'LOAD',
})

export const onQueryChange = addedQuery => ({
  type: 'NEW_QUERY',
  query: addedQuery
})
