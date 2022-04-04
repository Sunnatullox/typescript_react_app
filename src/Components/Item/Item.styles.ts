import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  padding: 5px;
  button{
    border-radius: 0 0 20px 20px;
  }
img{
  min-height: 200px;
  max-height: 200px;
  object-fit: cover;
  border-radius: 20px 20px 0 0 ;
} 
  div{
    padding: 1rem;
    height: 50%;
  }
`