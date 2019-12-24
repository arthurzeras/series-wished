export default {
  findWatchlist: { method: 'get', url: 'user/watchlist' },
  addOnWatchlist: { method: 'post', url: 'user/serie/watchlist' },
  deleteFromWatchlist: { method: 'delete', url: 'user/serie/watchlist{/id}' }
}
