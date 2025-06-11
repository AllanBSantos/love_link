"use client";
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";

// Variáveis do casal
const PERSON_1 = "Allan";
const PERSON_2 = "Lauany";
const START_DATE = new Date("2013-01-24T00:00:00"); // Data de início do relacionamento

function getTimeTogether(startDate: Date) {
  const now = new Date();
  let diff = Math.floor((now.getTime() - startDate.getTime()) / 1000);
  const years = Math.floor(diff / (365 * 24 * 60 * 60));
  diff -= years * 365 * 24 * 60 * 60;
  const months = Math.floor(diff / (30 * 24 * 60 * 60));
  diff -= months * 30 * 24 * 60 * 60;
  const days = Math.floor(diff / (24 * 60 * 60));
  diff -= days * 24 * 60 * 60;
  const hours = Math.floor(diff / (60 * 60));
  diff -= hours * 60 * 60;
  const minutes = Math.floor(diff / 60);
  const seconds = diff - minutes * 60;
  return { years, months, days, hours, minutes, seconds };
}

export default function Home() {
  const [timeTogether, setTimeTogether] = useState(getTimeTogether(START_DATE));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeTogether(getTimeTogether(START_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300 p-4">
      <div className="w-full max-w-md bg-white/80 rounded-3xl shadow-xl p-6 flex flex-col gap-6 mt-8 mb-8">
        <h1 className="text-3xl font-bold text-center text-rose-600 mb-2">
          Feliz Dia dos Namorados!
        </h1>
        <h2 className="text-xl text-center text-rose-500 font-semibold">
          {PERSON_1} &amp; {PERSON_2}
        </h2>
        <div className="flex flex-col items-center gap-2">
          <span className="text-lg text-gray-700">Juntos há:</span>
          <div className="flex flex-wrap justify-center gap-2 text-rose-700 font-mono text-base">
            <span>{timeTogether.years} anos</span>
            <span>{timeTogether.months} meses</span>
            <span>{timeTogether.days} dias</span>
            <span>{timeTogether.hours}h</span>
            <span>{timeTogether.minutes}m</span>
            <span>{timeTogether.seconds}s</span>
          </div>
        </div>
        {/* Carrossel de imagens será adicionado aqui */}
        <Carousel />
        {/* Mensagem personalizada */}
        <div className="bg-pink-50 rounded-xl p-4 mt-2 shadow-inner">
          <h3 className="text-rose-500 font-semibold mb-2 text-center"></h3>
          <p className="text-gray-700 text-center italic">
            &rdquo; Meu anjo, feliz dia dos namorados, e espero que goste desse
            singelo presente, não é nem de longe o que você merece, mas foi a
            minha forma de te mostrar o que eu sinto no dia de hoje.
            <br />
            <br />
            Saiba que esses foram os melhores anos da minha vida, e que eu me
            sinto previlegiado por ter voce comigo por tanto tempo, que nosso
            casamento floreça cada vez mais.
            <br />
            <br />
            Que o infinito e além seja só o começo do nosso infinito.
            <br />
            <br />
            Obrigado por ser minha companheira parceira e amiga de vida até para
            as maiores palhaçadas.
            <br />
            Do seu preto, Para Senhora Santos&rdquo;
          </p>
        </div>
      </div>
      <footer className="text-xs text-gray-400 text-center mb-2">
        Feito com ❤️ para {PERSON_2} — {new Date().getFullYear()}
      </footer>
    </div>
  );
}
