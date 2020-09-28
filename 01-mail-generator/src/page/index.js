import React, { useState } from 'react';
import InputMail from '../components/InputMail';
import Mail from '../components/Mail';

import { Container } from './styles';

function Page() {
  const [meal , setMeal] = useState({})
  return <Container>
      <InputMail setMeal={setMeal}/>
      <Mail meal={meal}/>
  </Container>
}

export default Page;