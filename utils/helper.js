export function formatDate(date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  date = new Date(date)
  return `${months[date.getMonth()]} ${date.getDate()}${
    date.getDate() === 1
      ? 'st'
      : date.getDate() === 2
      ? 'nd'
      : date.getDate() === 3
      ? 'rd'
      : 'th'
  }, ${date.getFullYear()}`
}

export const createStore = (entity) => {
  const properEntity = `${entity.charAt(0).toUpperCase()}${entity.slice(1)}`
  return {
    state: () => ({
      [`all${properEntity}`]: []
    }),
    mutations: {
      [`renewAll${properEntity}`](state, entity) {
        state[`all${properEntity}`] = entity
      }
    },
    actions: {
      async [`getAll${properEntity}`]({ commit }) {
        try {
          const { data } = await this.$axios.$get(`/${entity}`)
          commit(`renewAll${properEntity}`, data)
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err)
        }
      }
    }
  }
}
