import axios from 'axios'

export async function GetContent (_id, token) {
  try {
    const data = await axios.get(`/contents/${_id}`, {
      headers: { authorization: `Bearer ${token}` }
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export const genres = [
  'Action',
  'Comedy',
  'Fantasy',
  'Detective',
  'Horror',
  'Animation'
]
