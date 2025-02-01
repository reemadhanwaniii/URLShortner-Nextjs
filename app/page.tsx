"use client";

import { useState, useTransition } from "react";
export default function Home() {

  const [originalUrl,setOriginalUrl] = useState('');
  const [shortUrl,setShortUrl] = useState('');
  const [isPending,startTransition] = useTransition();


  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      startTransition(async () => {
        
      })
  }

  return (
    <>
      URL shortner
    </>
  );
}
