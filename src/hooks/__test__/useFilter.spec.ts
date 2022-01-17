import useFilter from '../useFilter'

describe('useFilter', () => {
  test('should filter properly', () => {
    const array = [
      {
        id: 0,
        name: 'test1',
        description: 'desc1',
        owner: 0 
      },
      {
        id: 1,
        name: 'test2',
        description: 'desc2',
        owner: 1 
      },
      {
        id: 2,
        name: 'test3',
        description: 'desc3',
        owner: 2 
      },
    ]

    const filteredArray = useFilter(array, '2')
    
    expect(filteredArray).toStrictEqual([{
      id: 1,
      name: 'test2',
      description: 'desc2',
      owner: 1 
    }])
  })
  test('filter should return nothing', () => {
    const array = [
      {
        id: 0,
        name: 'test1',
        description: 'desc1',
        owner: 0 
      },
      {
        id: 1,
        name: 'test2',
        description: 'desc2',
        owner: 1 
      },
      {
        id: 2,
        name: 'test3',
        description: 'desc3',
        owner: 2 
      },
    ]

    const filteredArray = useFilter(array, '70')
    
    expect(filteredArray).toStrictEqual([])
  })
  test('should not filter', () => {
    const array = [
      {
        id: 0,
        name: 'test1',
        description: 'desc1',
        owner: 0 
      },
      {
        id: 1,
        name: 'test2',
        description: 'desc2',
        owner: 1 
      },
      {
        id: 2,
        name: 'test3',
        description: 'desc3',
        owner: 2 
      },
    ]

    const filteredArray = useFilter(array, '')
    
    expect(filteredArray).toStrictEqual(array)
  })
})