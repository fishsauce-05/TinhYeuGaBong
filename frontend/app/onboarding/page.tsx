'use client';

import * as F from "@/components/layout";
import * as OnboardTag from '@/components/onboarding';
import {useRouter} from 'next/navigation';
import React, {useState} from "react";

export default function OnboardingPage() {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const backPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  const [loverName, setLoverName] = useState('');
  const [firstDate, setFirstDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('./');
  };

  return (
    <F.PageWrapper>
      <F.PageMain>
        {page === 1 && (
          <OnboardTag.WelcomePage nextPage = {nextPage}/>
        )}
        {page === 2 && (
          <OnboardTag.InfoPage
            backPage = {backPage}
            loverName = {loverName}
            setLoverName = {setLoverName}
            firstDate = {firstDate}
            setFirstDate = {setFirstDate}
            nextPage = {nextPage}
          />
        )}
        {page === 3 && (
          <OnboardTag.CongratPage
            backPage = {backPage}
            handleSubmit = {handleSubmit}
          />
        )}

      </F.PageMain>
    </F.PageWrapper>
  )
  
}