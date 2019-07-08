import Mock from 'mockjs'

const NameList = []
const count = 100

for (let i = 0; i < count; i++) {
  NameList.push(Mock.mock({
    name: '@first'
  }))
}
NameList.push({ name: 'mock-Pan' })

export default [
  // username search
  {
    url: '/search/user',
    type: 'get',
    response: config => {
      const { name } = config.query
      const mockNameList = NameList.filter(item => {
        const lowerCaseName = item.name.toLowerCase()
        return !(name && lowerCaseName.indexOf(name.toLowerCase()) < 0)
      })
      return {
        code: 20000,
        data: { items: mockNameList }
      }
    }
  },

  // transaction list
  {
    url: '/transaction/list',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          total: 10,
          items: [{
            order_no: 'No.24',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 11,
            status: 'Wrong'
          },
          {
            order_no: 'No.03',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 9,
            status: 'Accepted'
          },
          {
            order_no: 'No.15',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 9,
            status: 'Accepted'
          },
          {
            order_no: 'No.05',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 7,
            status: 'Accepted'
          },
          {
            order_no: 'No.08',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 6,
            status: 'Accepted'
          },
          {
            order_no: 'No.31',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 3,
            status: 'Wrong'
          },
          {
            order_no: 'No.07',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 3,
            status: 'Accepted'
          },
          {
            order_no: 'No.13',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 2,
            status: 'Accepted'
          },
          {
            order_no: 'No.24',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 11,
            status: 'Accepted'
          },
          {
            order_no: 'No.24',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 11,
            'status|1': ['success', 'pending']
          },
          {
            order_no: 'No.24',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 11,
            'status|1': ['success', 'pending']
          },
          {
            order_no: 'No.24',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 11,
            'status|1': ['success', 'pending']
          },
          {
            order_no: 'No.24',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 11,
            'status|1': ['success', 'pending']
          },
          {
            order_no: 'No.24',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 11,
            'status|1': ['success', 'pending']
          },
          {
            order_no: 'No.24',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: 11,
            'status|1': ['success', 'pending']
          }]
        }
      }
    }
  }
]
