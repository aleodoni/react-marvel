export function update({ id, name, description }) {
  return {
    type: '@character/UPDATE',
    payload: { id, name, description },
  };
}
