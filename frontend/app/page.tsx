'use client';

import {useRouter} from 'next/navigation';
import React from 'react';
import * as F from "@/components/layout";
import * as setup from "@/components/get_started";

export default function HomePage() {
  const [showLogin, setShowLogin] = React.useState(false);
  const openLogin = () => {
    setShowLogin(true);
  }

  const openDocInNewTab = () => {
    const newWindow = window.open('https://docs.google.com/document/d/1oruNGKwJK6KzJdNZ1ABHX-1uyguEKAop65KRED3-9Ic/edit?tab=t.95qaniamhv0i#heading=h.8hjq1tn0u0wo', '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null;
  }
  return (
    <F.PageWrapper>
      <F.PageMain>
        <F.PageCard>
          <F.TitleHeading
            title = "The app for the couple for sharing, storing the happy moments with each other"
          />
          <div className = "flex gap-4">
            <F.ButtonTag type = "button" onClick = {openLogin}>Get Started</F.ButtonTag>
            <F.ButtonTag type = "button" onClick = {openDocInNewTab}>Go to Document</F.ButtonTag>
          </div>
        </F.PageCard>
        {showLogin && <setup.LoginTag />}
      </F.PageMain>
    </F.PageWrapper>
  )
}