'use client';

import {useRouter} from 'next/navigation';
import React, {useState} from 'react';
import WelcomePage from './components/welcome';
import InfoStep from './components/info';

export default function OnboardingPage() {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const backPage = () => setPage(1);
  const nextPage = () => setPage(2);

  const [loverName, setLoverName] = useState('');
  const [firstDate, setFirstDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className = "flex min-h-screen items-center justify-center bg-custom font-roboto">
      <main className = "flex min-h-screen w-full max-w-3xl flex-col items-center justify-center">
        {page === 1 && (
          <WelcomePage nextPage = {nextPage}/>
        )}
        {page === 2 && (
          <InfoStep 
            backPage = {backPage}
            loverName = {loverName}
            setLoverName = {setLoverName}
            firstDate = {firstDate}
            setFirstDate = {setFirstDate}
            handleSubmit = {handleSubmit}
          />
        )}
      </main>
    </div>
  )
  
}