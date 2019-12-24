export default {
  findWatchedlist: { method: 'get', url: 'user/watchedlist' },
  addOnWatchedlist: { method: 'post', url: 'user/serie/watched' },
  deleteFromWatchedlist: { method: 'delete', url: 'user/serie/watched{/id}' }
}
