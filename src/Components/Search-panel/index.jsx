import React, { useState } from 'react'
import { Container, Filter, InputCon } from './style'

const SearchPanel = ({ setSearch }) => {
  const [active, setActive] = useState('Barcha kinolar')

  const btn = [
    { id: 1, name: 'Barcha kinolar' },
    { id: 2, name: 'Mashxur kinolar' },
    { id: 3, name: "eng ko'p qidirilgan kinolar" },
  ]
  return (
    <div className='container'>
      <Container>
        <InputCon>
          <input onChange={({ target: { value } }) => setSearch(value)} placeholder='Kinolarni qidirish' type="text" />
        </InputCon>
        <Filter>
          {
            btn.map(v => (
              <div
                key={v.id}
                onClick={() => setActive(v.name)}
                style={{ backgroundColor: active === v.name ? 'rgba(0, 0, 0, 0.85)' : '', color: active === v.name ? 'white' : '' }}
                className="option">{v.name}</div>
            ))
          }
        </Filter>
      </Container>
    </div>
  )
}

export default SearchPanel