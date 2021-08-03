import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { AppStyle, CustomForm, CustomContainer, BlessesBox } from './App.style'

const App = () => {
  // const [isAnon, setIsAnon] = useState(false)
  const [form, setForm] = useState({ author: '', bless: '' })
  const [blesses, setBlesses] = useState([])

  const handleChange = e => {
    e.preventDefault()
    setForm({...form, [e.target.name]: e.target.value})
    console.log(form)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (form.author.length <= 0) return alert('กรุณาระบุชื่อ')
    if (form.bless.length <= 0) return alert('กรุณากรอกคำอวยพร')
    // isAnon && setForm({...form, author: 'ประชาชนท่านหนึ่ง'})
    setBlesses([...blesses, form])
  }

  return (
    <AppStyle>
      <CustomContainer>
        <h1>ร่วมอวยพรให้ท่านนายกของประเทศไทย</h1>
        <img src={'https://www.thaipost.net/main/uploads/photos/big/20210124/image_big_600d4db1a0371.jpg'} alt='Uncle Too' />
        <BlessesBox>
          <ul>
            {blesses.map((data, index) =>
              <li key={index}>
                <h5>{data.author} :</h5>
                <p>{data.bless}</p>
              </li>
            )}
          </ul>
        </BlessesBox>
        <CustomForm>
          <CustomForm.Group className='mb-3'>
            <CustomForm.Label>ชื่อ</CustomForm.Label>
            <CustomForm.Control name='author' type='text' onChange={handleChange}/>
          </CustomForm.Group>

          {/* <CustomForm.Group className='mb-3'>
            <CustomForm.Check name='anon' type='checkbox' label='ไม่เปิดเผยชื่อ' onChange={e => setIsAnon(e.target.checked)} />
          </CustomForm.Group> */}

          <CustomForm.Group className='mb-3'>
            <CustomForm.Label>คำอวยพร</CustomForm.Label>
            <CustomForm.Control name='bless' as='textarea' rows={3} onChange={handleChange}/>
          </CustomForm.Group>
          <Button variant='primary' onClick={handleSubmit}>ส่งคำอวยพร</Button>
        </CustomForm>
      </CustomContainer>
    </AppStyle>
  )
}

export default App
