'use client';

import {useRouter} from 'next/navigation';
import React, {useState} from 'react';
import WelcomePage from '@/components/onboarding/WelcomePage';
import InfoPage from '@/components/onboarding/InfoPage';
import PageWrapper from '@/components/layout/PageWrapper';
import PageMain from '@/components/layout/PageMain';

export default function OnboardingPage() {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const backPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  const [loverName, setLoverName] = useState('');
  const [firstDate, setFirstDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <PageWrapper>
      <PageMain>
        {page === 1 && (
          <WelcomePage nextPage = {nextPage}/>
        )}
        {page === 2 && (
          <InfoPage
            backPage = {backPage}
            loverName = {loverName}
            setLoverName = {setLoverName}
            firstDate = {firstDate}
            setFirstDate = {setFirstDate}
            nextPage = {nextPage}
          />
        )}
      </PageMain>
    </PageWrapper>
  )
  
}