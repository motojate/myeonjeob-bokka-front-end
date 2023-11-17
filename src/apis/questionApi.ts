const getQuestion = () => {
  try {
    const response = {
      data: {
        code: 1000,
        result: {
          content: {
            mode: 'subjective',
            answer: '1234',
            question: ['처음', '다음'],
          },
        },
      },
    }
    const { code, result } = response.data
    if (code === 1000) return result
    else return null
  } catch (e) {
    console.error(e)
  }
}

const questionApi = {
  getQuestion,
}

export default questionApi
