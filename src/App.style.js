import { Form, Container } from 'react-bootstrap'
import styled from 'styled-components'

export const AppStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background: whitesmoke;

  h1 {
    text-align: center;
    font-weight: 500;
    padding: .2em;
  }

  img {
    display: block;
    margin: auto;
    width: 40%;
  }
`

export const BlessesBox = styled.div`
  display: block;
  margin: 1em auto;
  height: 200px;
  width: 50%;
  padding: 1em;
  border-radius: 10px;
  border: 2px solid rgba(10, 10, 10, 0.2);
  overflow-x: hidden;
  overflow-y: scroll;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 10px 0;
  }

  li:not(:last-child) {
    border-bottom: 1px solid grey;
  }

  h5 {
    font-weight: bold;
  }
`

export const CustomContainer = styled(Container)`
  background: white;
  height: 100%;
`

export const CustomForm = styled(Form)`
  border: 2px solid rgba(10, 10, 10, 0.2);
  border-radius: 10px;
  padding: 1em;
  width: 50%;
  margin: 1em auto;
`
