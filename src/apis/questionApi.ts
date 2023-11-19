const getQuestion = () => {
  const response = {
    data: {
      code: 1000,
      result: {
        content: {
          mode: 'subjective',
          answer: '1234',
          question: ['문제 1', '내용'],
        },
      },
    },
  }
  const { code, result } = response.data
  if (code === 1000) return result
  else
    return {
      content: {
        mode: 'subjective',
        answer: '1234',
        question: ['문제 1', '내용'],
      },
    }
}

const questionApi = {
  getQuestion,
}

export default questionApi
