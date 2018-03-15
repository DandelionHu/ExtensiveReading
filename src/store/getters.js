const getters = {
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  token: state => state.user.token,
  status: state => state.user.status,
  roles: state => state.user.roles,
}
export default getters
