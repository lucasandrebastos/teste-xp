"use client";

import MainContentContainer from "./components/MainContentContainer";

export default function Home() {
  return (
    <>
      <MainContentContainer>
        <div className="flex flex-col ">
          <h1 className="font-bold text-6xl mt-9">
            Bem vindo ao Voyager Backoffice!
          </h1>

          <h2 className="font-bold text-5xl mt-9">Visite nossa dashboard!</h2>
        </div>
      </MainContentContainer>
    </>
  );
}
